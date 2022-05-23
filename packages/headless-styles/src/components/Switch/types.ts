export interface SwitchA11yOptions {
  id?: string
  checked: boolean
  disabled?: boolean
  invalid?: boolean
  required?: boolean
}

export interface SwitchOptions extends SwitchA11yOptions {
  label?: string
  size?: Size
  tech?: Tech
}

// types

export type Size = 's' | 'm'
export type Tech = 'svelte'
