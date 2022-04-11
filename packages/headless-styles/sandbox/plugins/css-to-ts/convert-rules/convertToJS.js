const css = require('css')
import addProperty from '../utils/addProperty'
import fontface from './fontface'
import keyframes from './keyframes'
import standard from './standard'
import tokenMap from './tokenMap.js'

function returnVarContent(cssValToCheck) {
  if (cssValToCheck.includes('var(')) {
    return cssValToCheck.substring(3, cssValToCheck.length - 1)
  }

  return cssValToCheck
}

function replacePSVar(val) {
  let currentVal

  if (typeof val === 'string') {
    currentVal = returnVarContent(val)
  }

  if (typeof val === 'object') {
    // TODO: figure out how to get in here
    return val
  }

  console.log({ currentVal })

  return val
}

function sanitizeStyles(styleObject) {
  let updatedObject = Object.keys(styleObject).reduce((prev, current) => {
    return {
      ...prev,
      [styleObject[current]]: replacePSVar(current),
    }
  }, styleObject)

  // console.log({updatedObject})

  return styleObject
}

const convertRules = (rules, res = {}) => {
  let result = res
  rules.forEach((rule) => {
    if (rule.type === 'media') {
      // Convert @media rules
      const name = `@media ${rule.media}`
      result[name] = result[name] || {}
      const media = result[name]
      convertRules(rule.rules, media)
    } else if (rule.type === 'font-face') {
      // Convert @font-face rules
      const fontProp = fontface(rule, result)
      if (fontProp) result = addProperty(result, fontProp[0], fontProp[1])
    } else if (rule.type === 'keyframes') {
      // Convert @keyframes rules
      const keyProp = keyframes(rule, result)
      result = addProperty(result, keyProp[0], keyProp[1])
    } else if (rule.type === 'rule') {
      // Convert standard CSS rules
      const standardProp = standard(rule, result)
      Object.entries(standardProp).forEach(([key, value]) => {
        result = addProperty(result, key, value)
      })
    }
  })

  return sanitizeStyles(result)
}

const convertToJS = (input) => {
  // Parse CSS string into rules array
  try {
    const parsedCss = css.parse(input)
    const { rules } = parsedCss.stylesheet
    return convertRules(rules)
  } catch (err) {
    throw new Error(`Invalid CSS input: ${err}`)
  }
}

export default convertToJS
