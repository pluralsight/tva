export interface FieldOptions {
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
}

export type A11yBoolean = 'true' | 'false'
export type ButtonKind = 'text' | 'textWeak' | 'weak' | 'medium' | 'strong'
export type ButtonSize = 'xs' | 's' | 'm' | 'l'
export type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type IconSize = 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
