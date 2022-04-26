import kebabCase from 'kebab-case'

type StyleProps = Record<string, unknown>
type NestedStyleValue = string | StyleProps

interface StyleObject {
  cssProps: string
  styles: StyleProps
  keyframes?: Record<string, unknown>
  type?: 'submit' | 'reset' | 'button'
}

function formatCSSPropName(propName: string) {
  if (propName.includes('&')) {
    return propName
  }

  return `${kebabCase(propName)}:`
}

function transformValue(style: NestedStyleValue): NestedStyleValue {
  if (typeof style === 'string') {
    return `${style.trim()};`
  }

  const psuedoStyles = Object.keys(style).reduce((prev, current) => {
    return `
      ${prev.trim()}
      ${kebabCase(current)}: ${style[current]};
    `
  }, ``)

  return `{${psuedoStyles}}`
}

// Public

export function createSvelteObj(classname = '') {
  return { class: classname }
}

export function createJSProps(
  cssProps: string,
  styles: StyleProps,
  additionalProps?: StyleProps
): StyleObject {
  return {
    cssProps,
    styles,
    ...additionalProps,
  }
}

export function transformStyles(styleObject: StyleProps) {
  return Object.keys(styleObject)
    .reduce((prev, current) => {
      const propName = formatCSSPropName(current)

      return `
      ${prev.trim()}
      ${propName} ${transformValue(styleObject[current] as NestedStyleValue)}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '')
}
