import camelize from '../utils/camelize'
import sanitize from '../utils/sanitize'
import addProperty from '../utils/addProperty'

const standard = (rule, result) => {
  const obj = {}
  let retObj = {}
  rule.declarations.forEach((declaration) => {
    const cssProperty = camelize(declaration.property)
    obj[cssProperty] = declaration.value
  })
  rule.selectors.forEach((selector) => {
    let name

    // Check if selector contains a pseudo selector
    const pseudoSelectorIndex = selector.indexOf(':')
    if (pseudoSelectorIndex !== -1) {
      // Find end of pseudo selector
      let endPseudoSelectorIndex = selector.indexOf(' ', pseudoSelectorIndex)
      if (endPseudoSelectorIndex === -1)
        endPseudoSelectorIndex = selector.length

      // Split selector
      const primarySelector = selector.slice(0, pseudoSelectorIndex)
      const pseudoSelector = selector.slice(
        pseudoSelectorIndex,
        endPseudoSelectorIndex
      )
      const secondarySelector = selector.slice(
        endPseudoSelectorIndex,
        selector.length
      )

      const pseudoObj = {}
      pseudoObj[`&${pseudoSelector}${secondarySelector}`] = obj

      name = sanitize(primarySelector.trim())
      retObj = addProperty(result, name, pseudoObj)
    } else {
      name = sanitize(selector.trim())
      retObj = addProperty(result, name, obj)
    }
  })

  return retObj
}

export default standard
