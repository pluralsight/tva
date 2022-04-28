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

// Public

export const ChakraButton = {
  baseStyle: styles.base,
  defaultProps: {
    size: 'm',
    variant: 'text',
  },
  sizes: {
    xs: styles.xs,
    s: styles.s,
    m: styles.base,
    l: styles.l,
  },
  variants: {
    text: styles.text,
    textWeak: styles.textWeak,
    medium: styles.medium,
    strong: styles.strong,
    textDanger: styles.textDanger,
    mediumDanger: styles.mediumDanger,
    strongDanger: styles.strongDanger,
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
