import { getDefaultOptions } from './shared'
import type { ButtonOptions, ButtonType } from './types'
import styles from './buttonCSS.module.css'

export function getButtonProps(options?: ButtonOptions) {
  const { kind, size } = getDefaultOptions(options)
  const formattedSize = `size-${size}`

  return {
    className: `ps-btn ${styles.base} ${styles[kind]} ${styles[formattedSize]}`,
    type: 'button' as ButtonType,
  }
}
