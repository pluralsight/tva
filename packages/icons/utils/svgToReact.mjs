import path from 'path'
import fs from 'fs'
import { transform } from '@svgr/core'
import svgrOptions from '../svgr.config.cjs'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = path.join('build', 'svg')
const buildRoot = path.join('build', 'generated')
const buildPath = path.join(buildRoot, 'react')
const indexFile = path.resolve(buildRoot, 'index.ts')

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function addIndexReference(outputPath, varName) {
  // JS import always uses '/', but system may be different
  const tsxUrl = path
    .relative(buildRoot, outputPath)
    .split(path.sep)
    .concat([varName])
    .join('/')

  fs.appendFileSync(
    indexFile,
    `export { default as ${varName} } from './${tsxUrl}'\n`
  )
}

function formatAndWriteTsx(reactIconContent, varName, outputPath) {
  const outputFile = `${varName}.tsx`

  fs.writeFileSync(path.resolve(outputPath, outputFile), reactIconContent)

  fs.appendFileSync(
    path.resolve(outputPath, 'index.ts'),
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

  if (!fs.existsSync(path.resolve(outputPath))) {
    fs.mkdirSync(path.resolve(outputPath), { recursive: true })
  }

  const dirIndexFile = path.resolve(outputPath, pathName, 'index.ts')
  if (fs.existsSync(dirIndexFile)) {
    fs.rmSync(dirIndexFile)
  }
}

console.log('Generating React icons...')
removeIndexFile()
iterateSvgs(srcPath, svgToReact, createOutputDir)
console.log('done!')
