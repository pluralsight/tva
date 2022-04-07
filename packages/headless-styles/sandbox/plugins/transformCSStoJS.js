import { convert } from './css-to-ts'

function getOutputPath(path) {
  const splitPath = path.split('/')
  splitPath.pop()
  return `${splitPath.join('/')}/generated`
}

function compileFileToJS(id) {
  const outputPath = getOutputPath(id)
  convert(id, { outputType: 'file', outputPath })
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
