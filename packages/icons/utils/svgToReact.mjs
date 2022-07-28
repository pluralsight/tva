import { join, resolve, relative, sep } from 'path'
import fs from 'fs'
import { transform } from '@svgr/core'
import svgrOptions from '../svgr.config.cjs'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = join('build', 'svg')
const buildRoot = join('build', 'generated')
const buildPath = join(buildRoot, 'react')
const indexFile = resolve(buildRoot, 'index.ts')

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function addIndexReference(outputPath, varName) {
  // JS import always uses '/', but system may be different
  const tsxUrl = relative(buildRoot, outputPath)
    .split(sep)
    .concat([varName])
    .join('/')

  fs.appendFileSync(
    indexFile,
    `export { default as ${varName} } from './${tsxUrl}'\n`
  )
}

function formatAndWriteTsx(reactIconContent, varName, outputPath) {
  const outputFile = `${varName}.tsx`

  fs.writeFileSync(resolve(outputPath, outputFile), reactIconContent)

  fs.appendFileSync(
    resolve(outputPath, 'index.ts'),
    `export { default as ${varName} } from './${varName}'\n`
  )

  addIndexReference(outputPath, varName)
}

async function svgToReact(pathName, varName, svgContent) {
  const outputPath = getOutputDir(pathName)

  await transform(svgContent, svgrOptions, { componentName: varName }).then(
    (tsxContent) => {
      formatAndWriteTsx(tsxContent, varName, outputPath)
    }
  )
}

function removeIndexFile() {
  if (fs.existsSync(indexFile)) {
    fs.rmSync(indexFile)
  }
}

function createOutputDir(pathName) {
  const outputPath = getOutputDir(pathName)

  if (!fs.existsSync(resolve(outputPath))) {
    fs.mkdirSync(resolve(outputPath), { recursive: true })
  }

  const dirIndexFile = resolve(outputPath, pathName, 'index.ts')
  if (fs.existsSync(dirIndexFile)) {
    fs.rmSync(dirIndexFile)
  }
}

console.log('Generating React icons...')
removeIndexFile()
iterateSvgs(srcPath, svgToReact, createOutputDir)
fs.copyFileSync(resolve('src', 'types.ts'), resolve(buildPath, 'types.ts'))
console.log('done!')
