import path from 'path'
import fs from 'fs'
import convertToJS from '../convert-rules/convertToJS'
import reverseMediaQueries from '../utils/mediaReverse'

export const convertStringToJson = (input, mediaReverse) => {
  let contents = convertToJS(input)
  if (mediaReverse) {
    contents = reverseMediaQueries(contents)
  }
  return { contents }
}

export const convertFileToJson = (inputFile, mediaReverse) => {
  const css = fs.readFileSync(inputFile, 'utf8')

  let contents = convertToJS(css)
  if (mediaReverse) {
    contents = reverseMediaQueries(contents)
  }
  const filename = path.basename(inputFile, '.css')
  return { contents, filename }
}

export const convertDirToJson = (inputLocation, mediaReverse) => {
  const files = fs.readdirSync(inputLocation)
  return files
    .filter((file) => {
      if (fs.statSync(path.join(inputLocation, file)).isDirectory()) {
        console.warn(`Nested directories not supported, skipping ${file}`)
        return false
      }
      return true
    })
    .map((file) =>
      convertFileToJson(path.join(inputLocation, file), mediaReverse)
    )
}
