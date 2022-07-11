import type { Tech } from '../types'

export interface TagOptions {
  kind?: Kind
  size?: Size
  tech?: Tech
}

// types

export type Kind = 'weak' | 'strong'
export type Size = 's' | 'm'
