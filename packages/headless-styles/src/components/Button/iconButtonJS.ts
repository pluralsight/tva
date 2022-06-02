import { getDefaultIconButtonOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import type { IconButtonOptions, ButtonType } from './types'
import styles from './generated/buttonCSS.module'
import { getJSButtonProps } from './buttonJS'
import { IconOptions } from 'types'

type CSSProps = TemplateStringsArray | string
type Styles = Record<string, unknown>
type IconButtonReturn = {
  button: {
    cssProps: CSSProps
    styles: Styles
    type: ButtonType
    a11yProps: { 'aria-label': string }
  }
  iconOptions: IconOptions
}

// Public

// Chakra IconButton uses Button theming
// see ./buttonJS.ts for details
//
// export const ChakraIconButton = {}

export function getJSIconButtonProps(
  options?: IconButtonOptions
): IconButtonReturn {
  const { variant, ariaLabel, iconOptions, ...buttonOptions } =
    getDefaultIconButtonOptions(options)
  const sizeKey = `${buttonOptions.size}IconButton` as keyof typeof styles
  const buttonProps = getJSButtonProps(buttonOptions)
  const JsStyles = {
    ...buttonProps.styles,
    ...styles[sizeKey],
    ...styles[variant as keyof typeof styles],
  }

  return {
    button: {
      cssProps: transformStyles(JsStyles),
      styles: JsStyles,
      type: buttonProps.type,
      a11yProps: {
        'aria-label': ariaLabel,
      },
    },
    iconOptions,
  }
}
