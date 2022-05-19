export interface SwitchA11yOptions {
  id?: string
  checked: A11yBoolean
  disabled?: A11yBoolean
  invalid?: A11yBoolean
  required?: A11yBoolean
}

export interface SwitchOptions extends SwitchA11yOptions {
  label?: string
  size?: Size
  tech?: Tech
}

// types

export type A11yBoolean = 'true' | 'false'
export type Size = 's' | 'm'
export type Tech = 'svelte'
