import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { IconOptions } from '../Icon/types'
import type { Tech } from '../types'

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: Kind
  size?: Size
  tech?: Tech
}

export interface DangerOptions extends ButtonOptions {
  kind?: DangerKind
}

export interface IconButtonOptions {
  ariaLabel: string
  kind?: Kind
  size?: Size
  tech?: Tech
  variant?: Variant
}

export interface DangerIconButtonOptions extends IconButtonOptions {
  kind?: DangerKind
}

export interface IconButtonCommonReturn {
  button: {
    'aria-label': string
    type: ButtonType
  }
  iconOptions: IconOptions
}

// types

export type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type Kind = 'text' | 'textWeak' | 'weak' | 'medium' | 'strong'
export type DangerKind = 'text' | 'medium' | 'strong'
export type Size = 'xs' | 's' | 'm' | 'l'
export type Variant = 'default' | 'round'
