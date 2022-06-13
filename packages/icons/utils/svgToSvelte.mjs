import { join, relative, resolve, sep } from 'path'
import fs from 'fs'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = join('build', 'svg')
const buildPath = join('build', 'generated', 'svelte')
const indexFile = join(buildPath, 'index.ts')

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function addIndexReference(outputPath, outputFile, varName) {
  const importUrl = relative(buildPath, outputPath)
    .split(sep)
    .concat([outputFile])
    .join('/')

  fs.appendFileSync(
    indexFile,
    `export { default as ${varName} } from './${importUrl}'\n`
  )
}

function svgToSvelte(pathName, varName, svgContent) {
  const outputPath = getOutputDir(pathName)
  const outputFile = `${varName}.svelte`
  const svelteIconContent = svgContent.replace(
    /<svg (.*?)>/gm,
    `<svg $1 {...$$$$restProps}>`
  )

  fs.writeFileSync(resolve(outputPath, outputFile), svelteIconContent)

  addIndexReference(outputPath, outputFile, varName)
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
}

console.log('Generating Svelte icons...')
removeIndexFile()
iterateSvgs(srcPath, svgToSvelte, createOutputDir)
console.log('done!')
