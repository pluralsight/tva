import { getDefaultIconButtonOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import type { IconButtonOptions, ButtonType } from './types'
import styles from './generated/buttonCSS.module'
import { getJSButtonProps } from './buttonJS'

type CSSProps = TemplateStringsArray | string
type Styles = Record<string, unknown>
type IconButtonReturn = {
  cssProps: CSSProps
  styles: Styles
  type: ButtonType
  a11yProps: { 'aria-label': string }
}

// Public

// Chakra IconButton uses Button theming
// see ./buttonJS.ts for details
//
// export const ChakraIconButton = {}

export function getJSIconButtonProps(
  options?: IconButtonOptions
): IconButtonReturn {
  const { ariaLabel, variant, ...buttonOptions } =
    getDefaultIconButtonOptions(options)
  const sizeKey = `${buttonOptions.size}IconButton` as keyof typeof styles
  const buttonProps = getJSButtonProps(buttonOptions)
  const JsStyles = {
    ...buttonProps.styles,
    ...styles[sizeKey],
    ...styles[variant as keyof typeof styles],
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
    type: buttonProps.type,
    a11yProps: {
      'aria-label': ariaLabel,
    },
  }
}
