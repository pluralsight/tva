import kebabCase from 'kebab-case'
import type { FieldStates, Tech } from '../components/types'

export type NestedStyleValue = string | StyleProps
export type StyleProps = Record<string, unknown>
export type Syntax = 'jsx' | 'html'

export interface StyleObject {
  cssProps: string
  styles: StyleProps
  keyframes?: Record<string, unknown>
  type?: 'submit' | 'reset' | 'button'
}

export interface ClassOptions {
  defaultClass: string
  svelteClass: string
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

function isSvelte(tech: Tech) {
  return tech === 'svelte'
}

const propertyMap: Record<string, string> = {
  htmlFor: 'for',
}

// Public

export function createA11yProps(options: FieldStates) {
  const { disabled, invalid, required, readOnly } = options

  return {
    ['aria-invalid']: invalid,
    ['data-disabled']: disabled,
    ['data-invalid']: invalid,
    ['data-readonly']: readOnly,
    ['data-required']: required,
    disabled,
    readOnly,
    required,
  }
}

export function createSvelteObj(classname = '') {
  return { class: classname }
}

export function createCSSObj(className: string, additionalProps?: StyleProps) {
  return {
    className,
    ...additionalProps,
  }
}

export function createClassProp(tech: Tech, classes: ClassOptions) {
  if (tech === 'svelte') {
    return createSvelteObj(classes.svelteClass)
  }

  return createCSSObj(classes.defaultClass)
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

export function getSyntaxType(tech: Tech) {
  return tech === 'svelte' ? 'html' : 'jsx'
}

export function transformCasing(jsxProp: string, syntax: Syntax) {
  return syntax === 'html' ? kebabCase(jsxProp) : jsxProp
}

export function transformProperty(jsxProp: string, tech: Tech) {
  const htmlAttr = propertyMap[jsxProp] ?? ''
  return isSvelte(tech) ? htmlAttr : jsxProp
}
