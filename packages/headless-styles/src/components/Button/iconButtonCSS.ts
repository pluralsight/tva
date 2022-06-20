import { createClassProp } from '../../utils/helpers'
import { getDefaultIconButtonOptions, getIconButtonReturnProps } from './shared'
import type { IconButtonOptions } from './types'
import styles from './buttonCSS.module.css'

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const { kind, variant } = defaultOptions
  const sizeClass = `${defaultOptions.size}`
  const props = getIconButtonReturnProps(defaultOptions)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-icon-btn ${styles.iconButton} ${styles[kind]} ${styles[sizeClass]} ${styles[variant]}`,
        svelteClass: `base iconButton ${kind} ${sizeClass} ${variant}`,
      }),
    },
  }
}
