import path from 'path'
import fs from 'fs'
import { transform } from '@svgr/core'
import svgrOptions from '../svgr.config.cjs'

const srcPath = path.join('build', 'svg')
const buildRoot = path.join('build', 'generated')
const buildPath = path.join(buildRoot, 'react')
const indexFile = path.resolve(buildRoot, 'index.ts')

function toPascalCase(name) {
  return name
    .replace(/-(\w)/g, (x) => x.toUpperCase())
    .replace(/-/g, '')
    .replace(/^([a-z])/, (x) => x.toUpperCase())
}

function formatAndWriteTsx(reactIconContent, varName, outputPath) {
  const outputFile = `${varName}.tsx`

  fs.writeFileSync(path.resolve(outputPath, outputFile), reactIconContent)

  fs.appendFileSync(
    path.resolve(outputPath, 'index.ts'),
    `export { default as ${varName} } from './${varName}'\n`
  )

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

function buildTsxFiles(pathName) {
  const files = fs.readdirSync(pathName, { withFileTypes: true })
  const outputPath = pathName.replace(srcPath, buildPath)

  if (!fs.existsSync(path.resolve(outputPath))) {
    fs.mkdirSync(path.resolve(outputPath), { recursive: true })
  }

  files.forEach(async (file) => {
    if (file.isDirectory()) {
      const dirIndexFile = path.resolve(outputPath, file.name, 'index.ts')
      if (fs.existsSync(dirIndexFile)) {
        fs.rmSync(dirIndexFile)
      }

      svgToReact(path.join(pathName, file.name))
    } else if (/\.svg$/.test(file.name)) {
      const fileName = path.basename(file.name, '.svg')
      const varName = `${toPascalCase(fileName)}Icon`
      const svgIconContent = fs.readFileSync(path.resolve(pathName, file.name))

      transform(svgIconContent, svgrOptions, { componentName: varName }).then(
        (tsxContent) => {
          formatAndWriteTsx(tsxContent, varName, outputPath)
        }
      )
    }
  })
}

function svgToReact(currentPath) {
  if (/generated/.test(currentPath)) {
    return
  }

  buildTsxFiles(currentPath)
}

if (fs.existsSync(indexFile)) {
  fs.rmSync(indexFile)
}
svgToReact(srcPath)