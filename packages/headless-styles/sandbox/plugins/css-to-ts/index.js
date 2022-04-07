import fs from 'fs'
import path from 'path'
import writeToFile from './convert-inputs/write-file'
import {
  convertStringToJson,
  convertFileToJson,
  convertDirToJson,
} from './convert-inputs/convert-inputs'

//Input can be a Dir, File, String
export const convert = (input, config = {}) => {
  const outputType = config.outputType
  const outputPath = config.outputPath
  let mediaReverse = config.mediaReverse
  let convertedCss

  //If input is a String of CSS
  if (input === path.basename(input)) {
    convertedCss = convertStringToJson(input, mediaReverse)
  } else {
    //If input fs path is a Directory
    if (fs.statSync(input).isDirectory()) {
      convertedCss = convertDirToJson(input, mediaReverse)
    } else {
      //If input fs path is a File
      convertedCss = convertFileToJson(input, mediaReverse)
    }
  }

  if (!outputType) {
    if (Array.isArray(convertedCss)) {
      return convertedCss.map((obj) => obj.contents)
    } else {
      return convertedCss.contents
    }
  } else {
    const writeRecur = (input) => {
      if (Array.isArray(input)) {
        input.forEach((obj) => {
          writeRecur(obj)
        })
      } else {
        return writeToFile(outputPath, input, outputType)
      }
    }

    writeRecur(convertedCss)
  }
}
