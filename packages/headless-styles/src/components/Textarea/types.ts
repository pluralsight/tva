import type { InputFieldOptions, Tech } from '../types'

export interface TextareaOptions extends InputFieldOptions {
  resize?: Resize
  tech?: Tech
}

// types

export type Resize = 'horizontal' | 'vertical' | 'none' | 'initial'
