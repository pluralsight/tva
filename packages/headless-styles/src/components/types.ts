export interface CheckboxFieldOptions extends FieldOptions {
  checked: boolean
  direction?: CheckboxDirection
}

export interface FieldOptions extends FieldStates {
  id: string
  name: string
  value: string
}

export interface FieldStates {
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
}

export interface InputFieldOptions extends FieldOptions {
  describedBy?: string
  placeholder: string
}

// types

export type CheckboxDirection = 'row' | 'col'
export type IconSize = 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
