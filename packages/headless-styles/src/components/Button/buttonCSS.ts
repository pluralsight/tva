import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './buttonCSS.module.css'

type StyleId = keyof typeof styles

interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: 'text' | 'text-weak' | 'weak' | 'medium' | 'strong'
  size?: 'xs' | 's' | 'm' | 'l'
}

const defaultButtonOptions = {
  kind: 'text',
  size: 'm',
}

export function getButtonProps(options?: ButtonOptions) {
  const kind = options?.kind ?? (defaultButtonOptions.kind as StyleId)
  const size = options?.size ?? defaultButtonOptions.size
  const formattedSize = `size-${size}` as StyleId

  return {
    className: `ps-btn ${styles.base} ${styles[kind]} ${styles[formattedSize]}`,
    type: 'button' as 'button' | 'submit' | 'reset' | undefined,
  }
}
