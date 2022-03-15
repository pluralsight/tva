import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: Kind
  size?: Size
}

// types

export type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type Kind = 'text' | 'text-weak' | 'weak' | 'medium' | 'strong'
export type Size = 'xs' | 's' | 'm' | 'l'
