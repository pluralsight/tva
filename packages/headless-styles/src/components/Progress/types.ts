export interface ProgressOptions {
  kind?: Kind
  size?: Size
  tech?: Tech
}

// types

export type Kind = 'linear' | 'inset'
export type Size = 'xs' | 's'
export type Tech = 'svelte'
