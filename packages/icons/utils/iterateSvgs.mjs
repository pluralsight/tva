import path from 'path'
import fs from 'fs'

function toPascalCase(name) {
  return name
    .replace(/-(\w)/g, (x) => x.toUpperCase())
    .replace(/-/g, '')
    .replace(/^([a-z])/, (x) => x.toUpperCase())
}

export default function iterateSvgs(currentPath, processFile, onEnterDir) {
  const files = fs.readdirSync(currentPath, { withFileTypes: true })

  onEnterDir(currentPath)

  files.forEach((file) => {
    if (file.isDirectory()) {
      iterateSvgs(path.join(currentPath, file.name), processFile, onEnterDir)
    } else if (/\.svg$/.test(file.name)) {
      const fileName = path.basename(file.name, '.svg')
      const varName = `${toPascalCase(fileName)}Icon`
      const svgContent = fs.readFileSync(path.resolve(currentPath, file.name), {
        encoding: 'utf-8',
      })

      processFile(currentPath, varName, svgContent)
    }
  })
}
