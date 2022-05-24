import type { FieldOptions } from '../types'

export interface SwitchA11yOptions extends FieldOptions {
  id?: string
  checked: boolean
}

export interface SwitchOptions extends SwitchA11yOptions {
  label?: string
  size?: Size
  tech?: Tech
}

// types

export type Size = 's' | 'm'
export type Tech = 'svelte'
