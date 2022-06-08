import { FieldOptions, Tech } from '../types'

export interface InputOptions extends FieldOptions {
  describedBy?: string
  id: string
  name: string
  placeholder: string
  size?: Size
  tech?: Tech
  type: InputType
  value: string
}

// types

export type Size = 'm' | 'l'
// Note: We are restricting to these types to match text-like input styles
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url'
