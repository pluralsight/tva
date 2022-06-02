import { createClassProp } from '../../utils/helpers'
import type { ButtonType, IconButtonOptions } from './types'
import { getDefaultIconButtonOptions } from './shared'
import styles from './buttonCSS.module.css'

// Public

export function getIconButtonProps(options?: IconButtonOptions) {
  const { kind, size, variant, ariaLabel, tech, iconOptions } =
    getDefaultIconButtonOptions(options)
  const sizeClass = `${size}IconButton`

  return {
    button: {
      'aria-label': ariaLabel,
      type: 'button' as ButtonType,
      ...createClassProp(tech, {
        defaultClass: `ps-icon-btn ${styles[kind]} ${styles[sizeClass]} ${styles[variant]}`,
        svelteClass: `base ${kind} ${sizeClass} ${variant}`,
      }),
    },
    iconOptions,
  }
}
