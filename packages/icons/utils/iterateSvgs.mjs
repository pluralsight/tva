import { join, basename, resolve } from 'path'
import { readdirSync, readFileSync } from 'fs'

function toPascalCase(name) {
  return name
    .replace(/-(\w)/g, (x) => x.toUpperCase())
    .replace(/-/g, '')
    .replace(/^([a-z])/, (x) => x.toUpperCase())
}

export default function iterateSvgs(currentPath, processFile, onEnterDir) {
  const files = readdirSync(currentPath, { withFileTypes: true })

  onEnterDir(currentPath)

  files.forEach((file) => {
    if (file.isDirectory()) {
      iterateSvgs(join(currentPath, file.name), processFile, onEnterDir)
    } else if (/\.svg$/.test(file.name)) {
      const fileName = basename(file.name, '.svg')
      const varName = `${toPascalCase(fileName)}Icon`
      const svgContent = readFileSync(resolve(currentPath, file.name), {
        encoding: 'utf-8',
      })

      processFile(currentPath, varName, svgContent)
    }
  })
}
