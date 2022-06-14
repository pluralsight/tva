import { join, resolve } from 'path'
import { existsSync, rmSync, mkdirSync, writeFileSync, cpSync } from 'fs'
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

function clean() {
  if (existsSync(dataFile)) {
    rmSync(dataFile)
  }
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
  writeFileSync(
    resolve(dataFile),
    `export const iconStrings = ${JSON.stringify(iconHash, null, 2)}`
  )
}

console.log('Generating icon strings...')
clean()
createOutputDir(buildPath)
iterateSvgs(srcPath, svgToString)
writeDataFile()
cpSync(resolve('src', 'string'), join('build', 'generated', 'string'), {
  recursive: true,
})
console.log('done!')
