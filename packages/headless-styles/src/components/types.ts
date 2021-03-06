export interface CheckboxFieldOptions extends FieldOptions {
  checked: boolean
  direction?: CheckboxDirection
  value: string
}

export interface FieldOptions extends FieldStates {
  id: string
  name: string
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
  value: string
}

// types

export type CheckboxDirection = 'row' | 'col'
export type IconSize = 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
