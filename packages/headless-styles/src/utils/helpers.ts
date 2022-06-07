import kebabCase from 'kebab-case'
import type { FieldOptions, Tech } from '../components/types'

export type StyleProps = Record<string, unknown>
export type NestedStyleValue = string | StyleProps

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

// Public

export function createA11yProps(options: FieldOptions) {
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
