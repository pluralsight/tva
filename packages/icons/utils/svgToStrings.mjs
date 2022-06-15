import { join, resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs'
import fse from 'fs-extra'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = join('build', 'svg')
const buildPath = join('src', 'string', 'generated')
const dataFile = join(buildPath, 'iconStrings.ts')
let iconHash = {}

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function svgToString(pathName, varName, svgContent) {
  iconHash[varName] = svgContent
}

function createOutputDir(pathName) {
  const outputPath = getOutputDir(pathName)

  try {
    mkdirSync(resolve(outputPath), { recursive: true })
  } catch (err) {
    console.log(`Failed to create ${outputPath}`)
  }
}

function writeDataFile() {
  const iconObjectString = Object.keys(iconHash).reduce(
    (prev, current) =>
      `${prev}\n  ${current}: "${iconHash[current].replace(/"/g, "'")}",`,
    ''
  )
  writeFileSync(
    resolve(dataFile),
    `export const iconStrings = {\n${iconObjectString}\n}`
  )
}

console.log('Generating icon strings...')
createOutputDir(buildPath)
iterateSvgs(srcPath, svgToString)
writeDataFile()
fse.copySync(resolve('src', 'string'), join('build', 'generated', 'string'))
console.log('done!')
