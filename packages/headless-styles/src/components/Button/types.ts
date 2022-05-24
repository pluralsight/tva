import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

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

export interface IconLabelOptions extends ButtonOptions {
  position?: IconPosition
}

// types

export type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type Kind = 'text' | 'textWeak' | 'weak' | 'medium' | 'strong'
export type DangerKind = 'text' | 'medium' | 'strong'
export type IconPosition = 'start' | 'end'
export type Size = 'xs' | 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
