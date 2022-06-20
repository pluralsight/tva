import { transformStyles } from '../../utils/helpers'
import { IconOptions } from '../../types'
import styles from './generated/buttonCSS.module'
import type { ButtonType, IconButtonOptions } from './types'
import { getDefaultIconButtonOptions, getIconButtonReturnProps } from './shared'

type CSSProps = TemplateStringsArray | string
type Styles = Record<string, unknown>
type IconButtonReturn = {
  button: {
    cssProps: CSSProps
    styles: Styles
    type: ButtonType
    'aria-label': string
  }
  iconOptions: IconOptions
}

// Chakra theming uses Button for IconButton as well
// see ./chakraButton.ts for details
//
// export const ChakraIconButton = {}

export function getJSIconButtonProps(
  options?: IconButtonOptions
): IconButtonReturn {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const { variant, kind, size } = defaultOptions
  const { button, iconOptions } = getIconButtonReturnProps(defaultOptions)
  const variantKey = `${variant}IconButton` as keyof typeof styles
  const kindStyles = styles[kind]
  const JsStyles = {
    ...styles.base,
    ...styles[size as keyof typeof styles],
    ...styles[variantKey],
    ...kindStyles,
    '&:hover': {
      ...(kindStyles[
        '&:hover' as unknown as keyof typeof kindStyles
      ] as unknown as typeof styles),
      color: '#fff',
    },
    '&:active': {
      ...styles.base['&:active'],
      ...(kindStyles[
        '&:active' as unknown as keyof typeof kindStyles
      ] as unknown as typeof styles),
    },
  }

  return {
    button: {
      ...button,
      cssProps: transformStyles(JsStyles),
      styles: JsStyles,
    },
    iconOptions,
  }
}
