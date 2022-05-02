export interface ProgressOptions {
  kind?: Kind
  max?: number
  min?: number
  now?: number
  size?: Size
  tech?: Tech
}

// types

export type Kind = 'linear' | 'inset'
export type Size = 'xs' | 's'
export type Tech = 'svelte'
