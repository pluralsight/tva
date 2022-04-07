import { convert } from './css-to-ts'

function getOutputPath(path) {
  const splitPath = path.split('/')
  splitPath.pop()
  return `${splitPath.join('/')}/generated`
}

function compileFileToTS(id) {
  const outputPath = getOutputPath(id)
  convert(id, { outputType: 'file', outputPath })
  return undefined
}

export default function transformCSStoTS(regexPath) {
  return {
    name: 'transform-css-to-js',

    transform(_, id) {
      const fileRegex = regexPath ?? /\.(css)$/

      if (fileRegex.test(id)) {
        return {
          code: compileFileToTS(id),
          map: null, // provide source map if available
        }
      }
    },
  }
}
