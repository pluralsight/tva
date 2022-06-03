import type { ButtonOptions } from '../../types'

export interface IconButtonOptions extends ButtonOptions {
  ariaLabel: string
  variant?: Variant
}

// types

export type Variant = 'default' | 'round'
