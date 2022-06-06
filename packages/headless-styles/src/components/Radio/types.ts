import type { FieldOptions, Tech } from '../types'

export interface RadioOptions extends FieldOptions {
  checked: boolean
  direction?: Direction
  id: string
  name?: string
  tech?: Tech
  value: string
}

// types

export type Direction = 'row' | 'col'
