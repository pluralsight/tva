import { transformStyles } from '../../utils/helpers'
import { getJSButtonProps } from '../Button/buttonJS'
import { IconOptions } from '../../types'
import type { ButtonType } from '../types'
import type { IconButtonOptions } from './types'
import { getDefaultIconButtonOptions } from './shared'
import styles from './generated/iconButtonCSS.module'

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

// Chakra theming uses Button for IconButton as well
// see ../Button/chakraButton.ts for details
//
// export const ChakraIconButton = {}

export function getJSIconButtonProps(
  options?: IconButtonOptions
): IconButtonReturn {
  const { variant, ariaLabel, iconOptions, ...buttonOptions } =
    getDefaultIconButtonOptions(options)
  const sizeKey = `${buttonOptions.size}IconButton` as keyof typeof styles
  const variantKey = `${variant}IconButton` as keyof typeof styles
  const buttonProps = getJSButtonProps(buttonOptions)
  const JsStyles = {
    ...buttonProps.styles,
    ...styles.baseIconButton,
    ...styles[sizeKey],
    ...styles[variantKey],
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
