import camelize from '../utils/camelize'
import capitalize from '../utils/capitalize'
import sanitize from '../utils/sanitize'

function sanitizeName(name, numLen) {
  let updatedName

  if (numLen > 0) {
    updatedName = `${name}_${numLen + 1}`
  }

  return sanitize(updatedName)
}

const fontface = (rule, result) => {
  let name = ''
  let obj = {}
  const fontObj = {}

  rule.declarations.forEach((declaration) => {
    const cssProperty = camelize(declaration.property)
    fontObj[cssProperty] = declaration.value

    name = capitalize(camelize(fontObj.fontFamily).replace(/"/g, ''))
    obj = { '@font-face': fontObj }
  })

  let dupeFlag = false

  Object.keys(result).forEach((key) => {
    if (
      key.split('_')[0] === name &&
      JSON.stringify(result[key]) === JSON.stringify(obj)
    ) {
      dupeFlag = true
    }
  })

  if (!dupeFlag) {
    const numVar = Object.entries(result).filter(
      (resObj) => resObj[0].split('_')[0] === name
    ).length
    const finalName = sanitizeName(name, numVar)

    // if (numVar > 0) {
    //   name = `${name}_${numVar + 1}`
    // }

    // name = sanitize(name)

    return [finalName, obj]
  }

  return false
}

export default fontface
