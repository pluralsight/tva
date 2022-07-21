import type { Tech } from '../types'

export interface AvatarOptions {
  ariaLabel?: string
  kind?: Kind
  size?: Size
  tech?: Tech
}

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
export type Kind = 'neutral' | 'strong'
