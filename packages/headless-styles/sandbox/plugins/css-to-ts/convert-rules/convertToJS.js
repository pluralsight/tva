const css = require('css')
import addProperty from '../utils/addProperty'
import fontface from './fontface'
import keyframes from './keyframes'
import standard from './standard'
import tokenMap from './tokenMap.js'

const VAR_IDX = 4

function getPSVariable(stringToClean) {
  const origStartIdx = stringToClean.indexOf('var(')
  const startIdx = origStartIdx === 0 ? VAR_IDX : origStartIdx + VAR_IDX
  const endIdx = stringToClean.indexOf(')')
  return stringToClean.substring(startIdx, endIdx)
}

function replacePSVar(psVarString) {
  const psToken = getPSVariable(psVarString)
  return psVarString.replace(`var(${psToken})`, tokenMap[psToken])
}

function filterPSVar(cssValue) {
  if (cssValue.includes('var(')) {
    return replacePSVar(cssValue)
  }

  return cssValue
}

function checkForNestedSelectors(propToCheck) {
  if (typeof propToCheck === 'string') {
    return filterPSVar(propToCheck)
  }
  return findAndReplaceVars(propToCheck)
}

function findAndReplaceVars(styleObject) {
  return Object.keys(styleObject).reduce((prev, current) => {
    const sanitizedVal = checkForNestedSelectors(styleObject[current])
    return {
      ...prev,
      [current]: sanitizedVal,
    }
  }, styleObject)
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
        const sanitizedValue = findAndReplaceVars(value)
        result = addProperty(result, key, sanitizedValue)
      })
    }
  })

  return result
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
