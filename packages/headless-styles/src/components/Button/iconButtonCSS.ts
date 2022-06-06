import { createClassProp } from '../../utils/helpers'
import type { IconSize } from '../types'
import type { ButtonType, IconButtonOptions, Size } from './types'
import { getDefaultIconButtonOptions } from './shared'
import styles from './buttonCSS.module.css'

// Public

const iconButtonSizeMap: Record<Size, IconSize> = {
  xs: 's',
  s: 'm',
  m: 'm',
  l: 'l',
}

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const { kind, size, variant, ariaLabel, tech } = defaultOptions
  const sizeClass = `${size}IconButton`

  return {
    button: {
      'aria-label': ariaLabel,
      type: 'button' as ButtonType,
      ...createClassProp(
        {
          defaultClass: `ps-icon-btn ${styles[kind]} ${styles[sizeClass]} ${styles[variant]}`,
          svelteClass: `base ${kind} ${sizeClass} ${variant}`,
        },
        tech
      ),
    },
    iconOptions: {
      ariaHidden: true,
      size: iconButtonSizeMap[size],
    },
  }
}
