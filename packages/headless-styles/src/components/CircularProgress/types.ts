import type { Tech } from '../types'

export interface CircularProgressA11yOptions {
  max?: number
  min?: number
  now?: number
}

export interface CircularProgressOptions extends CircularProgressA11yOptions {
  kind?: Kind
  size?: Size
  tech?: Tech
}

// types

export type Kind = 'determinate' | 'indeterminate'
export type Size = 'xs' | 'm'
