import type { Tech } from '../types'

export interface SkeletonOptions {
  kind?: Kind
  tech?: Tech
}

// types

export type Kind = 'content' | 'text' | 'circle'
