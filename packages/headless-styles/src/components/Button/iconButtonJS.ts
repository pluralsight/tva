import { transformStyles } from '../../utils/helpers'
import styles from './generated/buttonCSS.module'
import type {
  ButtonType,
  DangerIconButtonOptions,
  IconButtonCommonReturn,
  IconButtonOptions,
} from './types'
import {
  getDefaultDangerIconButtonOptions,
  getDefaultIconButtonOptions,
  getIconButtonReturnProps,
} from './shared'

type CSSProps = TemplateStringsArray | string
type Styles = Record<string, unknown>
type StyleKey = keyof typeof styles
interface IconButtonReturn extends IconButtonCommonReturn {
  button: {
    'aria-label': string
    cssProps: CSSProps
    styles: Styles
    type: ButtonType
  }
}

// Chakra theming uses Button for IconButton as well
// see ./chakraButton.ts for details
//
// export const ChakraIconButton = {}

function getJSIconButtonStyles(
  sizeKey: StyleKey,
  variantKey: StyleKey,
  kindStyles: Styles
) {
  return {
    ...styles.base,
    ...styles[sizeKey],
    ...styles[variantKey],
    ...kindStyles,
    '&:hover': {
      ...(kindStyles['&:hover' as keyof typeof kindStyles] as typeof styles),
    },
    '&:active': {
      ...styles.base['&:active'],
      ...(kindStyles['&:active' as keyof typeof kindStyles] as typeof styles),
    },
  }
}

function buildJSIconButton(
  returnProps: IconButtonCommonReturn,
  jsStyles: Styles
): IconButtonReturn {
  return {
    button: {
      ...returnProps.button,
      cssProps: transformStyles(jsStyles),
      styles: jsStyles,
    },
    iconOptions: returnProps.iconOptions,
  }
}

export function getJSDangerIconButtonProps(
  options?: DangerIconButtonOptions
): IconButtonReturn {
  const defaultOptions = getDefaultDangerIconButtonOptions(options)
  const variantKey = `${defaultOptions.variant}IconButton` as StyleKey
  const kindStyles = styles[`${defaultOptions.kind}Danger`]

  return buildJSIconButton(
    getIconButtonReturnProps(defaultOptions),
    getJSIconButtonStyles(
      defaultOptions.size as StyleKey,
      variantKey,
      kindStyles
    )
  )
}

export function getJSIconButtonProps(
  options?: IconButtonOptions
): IconButtonReturn {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const variantKey = `${defaultOptions.variant}IconButton` as StyleKey
  const kindStyles = styles[defaultOptions.kind]

  return buildJSIconButton(
    getIconButtonReturnProps(defaultOptions),
    getJSIconButtonStyles(
      defaultOptions.size as StyleKey,
      variantKey,
      kindStyles
    )
  )
}
