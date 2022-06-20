import { createClassProp } from '../../utils/helpers'
import { getDefaultIconButtonOptions, getIconButtonReturnProps } from './shared'
import type { IconButtonOptions } from './types'
import styles from './buttonCSS.module.css'

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const { kind } = defaultOptions
  const variantClass = `${defaultOptions.variant}IconButton`
  const sizeClass = `${defaultOptions.size}`
  const props = getIconButtonReturnProps(defaultOptions)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-icon-btn ${styles[variantClass]} ${styles[kind]} ${styles[sizeClass]}`,
        svelteClass: `base ${variantClass} ${kind} ${sizeClass}`,
      }),
    },
  }
}
