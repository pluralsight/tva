import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { ButtonKind, ButtonSize, Tech } from '../types'

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: ButtonKind
  size?: ButtonSize
  tech?: Tech
}

export interface DangerOptions extends ButtonOptions {
  kind?: DangerKind
}

export interface IconButtonOptions extends ButtonOptions {
  ariaLabel: string
  variant?: Variant
}

// types

export type DangerKind = 'text' | 'medium' | 'strong'
export type Variant = 'default' | 'round'
