import kebabCase from 'kebab-case'

type StyleObject = Record<string, unknown>
type NestedStyleValue = string | StyleObject

function transformValue(style: NestedStyleValue): NestedStyleValue {
  if (typeof style === 'string') {
    return `${style};`.trim()
  }

  const psuedoStyles = Object.keys(style).reduce((prev, current) => {
    return `
      ${prev.trim()}
      ${kebabCase(current)}: ${style[current]};
    `
  }, ``)

  return `{${psuedoStyles}}`
}

export function transformStyles(styleObject: StyleObject) {
  return Object.keys(styleObject)
    .reduce((prev, current) => {
      return `
      ${prev.trim()}
      ${kebabCase(current)}: ${transformValue(
        styleObject[current] as NestedStyleValue
      )}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '')
}
