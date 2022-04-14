import { getDefaultOptions } from './shared'
import type { ButtonOptions, ButtonType } from './types'
import styles from './buttonCSS.module.css'

export function getButtonProps(options?: ButtonOptions) {
  const { kind, size, tech } = getDefaultOptions(options)
  const formattedSize = `size-${size}`
  const framework = styles[tech] ?? ''

  if (tech === 'svelte') {
    return {
      class: `base ${kind} ${formattedSize}`,
    }
  }

  return {
    className: `ps-btn ${styles.base} ${styles[kind]} ${styles[formattedSize]} ${framework}`,
    type: 'button' as ButtonType,
  }
}
