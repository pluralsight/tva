import { rename } from 'fs'
import { convert } from '@americanexpress/css-to-js'

function getOutputPath(path) {
  const splitPath = path.split('/')
  const fileName = splitPath.pop()
  return {
    fileName,
    outputPath: `${splitPath.join('/')}/generated`,
  }
}

function compileFileToJS(id) {
  const { fileName, outputPath } = getOutputPath(id)
  const rawName = fileName.split('.css')[0]
  const covertedFile = `${outputPath}/${rawName}`

  convert(id, { outputType: 'file', outputPath })
  rename(`${covertedFile}.js`, `${covertedFile}.ts`)
  return undefined
}

export default function transformCSStoJS(regexPath) {
  return {
    name: 'transform-css-to-js',

    transform(_, id) {
      const fileRegex = regexPath ?? /\.(css)$/

      if (fileRegex.test(id)) {
        return {
          code: compileFileToJS(id),
          map: null, // provide source map if available
        }
      }
    },
  }
}
