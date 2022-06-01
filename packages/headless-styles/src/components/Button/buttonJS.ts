import { getDefaultDangerOptions, getDefaultOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import type { ButtonOptions, ButtonType, DangerOptions } from './types'
import styles from './generated/buttonCSS.module'

type CSSProps = TemplateStringsArray | string
type Styles = Record<string, unknown>
type ButtonReturn = {
  cssProps: CSSProps
  styles: Styles
  type: ButtonType
}

interface CreateButtonOptions {
  cssProps: CSSProps
  styles: Styles
}

function createButtonProps(options: CreateButtonOptions) {
  return {
    cssProps: options.cssProps,
    styles: options.styles,
    type: 'button' as ButtonType,
  }
}

const baseStyles = {
  ...styles.base,
}

function getChakraSize(props: { padding: string; size: string }) {
  const keySuffix = props.padding === '0' ? 'IconButton' : ''
  const sizeKey = props.size === 'm' ? 'base' : `${props.size}${keySuffix}`

  return styles[sizeKey as keyof typeof styles]
}

function getChakraVariant(props: {
  variant: string
  borderRadius: string
}): Styles {
  const roundStyles = props.borderRadius === 'full' ? styles.round : {}

  return {
    ...styles[props.variant as keyof typeof styles],
    ...roundStyles,
  }
}

// Public

export const ChakraButton = {
  baseStyle: styles.base,
  defaultProps: {
    size: 'm',
    variant: 'text',
  },
  sizes: {
    xs: getChakraSize,
    s: getChakraSize,
    m: getChakraSize,
    l: getChakraSize,
  },
  variants: {
    text: getChakraVariant,
    textWeak: getChakraVariant,
    medium: getChakraVariant,
    strong: getChakraVariant,
    textDanger: getChakraVariant,
    mediumDanger: getChakraVariant,
    strongDanger: getChakraVariant,
  },
}

export function getJSDangerButtonProps(options?: DangerOptions): ButtonReturn {
  const { kind, size } = getDefaultDangerOptions(options)
  const kindKey = styles[`${kind}Danger` as keyof typeof styles]
  const JsStyles = {
    ...baseStyles,
    ...kindKey,
    ...styles[size as keyof typeof styles],
    '&:hover': {
      ...(kindKey[
        '&:hover' as unknown as keyof typeof kindKey
      ] as unknown as typeof styles),
    },
    '&:active': {
      ...baseStyles['&:active'],
      ...(kindKey[
        '&:active' as unknown as keyof typeof kindKey
      ] as unknown as typeof styles),
    },
  }

  return createButtonProps({
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
  })
}

export function getJSButtonProps(options?: ButtonOptions): ButtonReturn {
  const { kind, size } = getDefaultOptions(options)
  const kindKey = styles[kind]
  const JsStyles = {
    ...baseStyles,
    ...kindKey,
    ...styles[size as keyof typeof styles],
    '&:hover': {
      ...(kindKey[
        '&:hover' as unknown as keyof typeof kindKey
      ] as unknown as typeof styles),
      color: '#fff',
    },
    '&:active': {
      ...baseStyles['&:active'],
      ...(kindKey[
        '&:active' as unknown as keyof typeof kindKey
      ] as unknown as typeof styles),
    },
  }

  return createButtonProps({
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
  })
}
