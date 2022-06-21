import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
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

export interface IconButtonOptions extends ButtonOptions {
  ariaLabel: string
  variant?: Variant
}

export interface DangerIconButtonOptions extends IconButtonOptions {
  kind?: DangerKind
}

// types

export type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type Kind = 'text' | 'textWeak' | 'weak' | 'medium' | 'strong'
export type DangerKind = 'text' | 'medium' | 'strong'
export type Size = 'xs' | 's' | 'm' | 'l'
export type Variant = 'default' | 'round'
