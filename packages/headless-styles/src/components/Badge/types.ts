import type { Tech } from '../types'

export interface BadgeOptions {
  kind?: Kind
  tech?: Tech
}

// types

export type Kind = 'weak' | 'medium' | 'strong'
