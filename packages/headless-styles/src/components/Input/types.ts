import { InputFieldOptions, Tech } from '../types'

export interface InputOptions extends InputFieldOptions {
  size?: Size
  tech?: Tech
  type: InputType
}

// types

export type Size = 'm' | 'l'
// Note: We are restricting to these types to match text-like input styles
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url'
