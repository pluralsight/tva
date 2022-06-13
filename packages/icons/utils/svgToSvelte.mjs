import path from 'path'
import fs from 'fs'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = path.join('build', 'svg')
const buildPath = path.join('build', 'generated', 'svelte')
const indexFile = path.join(buildPath, 'index.ts')

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function addIndexReference(outputPath, outputFile, varName) {
  const importUrl = path
    .relative(buildPath, outputPath)
    .split(path.sep)
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

  fs.writeFileSync(path.resolve(outputPath, outputFile), svelteIconContent)

  addIndexReference(outputPath, outputFile, varName)
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
}

console.log('Generating Svelte icons...')
removeIndexFile()
iterateSvgs(srcPath, svgToSvelte, createOutputDir)
console.log('done!')
