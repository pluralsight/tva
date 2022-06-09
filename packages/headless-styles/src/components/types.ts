export interface CheckboxFieldOptions extends FieldOptions {
  checked: boolean
  direction?: CheckboxDirection
  id: string
  name?: string
  value: string
}

export interface FieldOptions {
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
}

// types

export type CheckboxDirection = 'row' | 'col'
export type IconSize = 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
