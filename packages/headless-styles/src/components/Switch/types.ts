import type { FieldOptions, Tech } from '../types'

export interface SwitchA11yOptions extends FieldOptions {
  checked: boolean
}

export interface SwitchOptions extends SwitchA11yOptions {
  label?: string
  size?: Size
  tech?: Tech
}

// types

export type Size = 's' | 'm'
