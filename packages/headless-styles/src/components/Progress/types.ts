export interface ProgressA11yOptions {
  max?: number
  min?: number
  now?: number
}

export interface ProgressOptions extends ProgressA11yOptions {
  kind?: Kind
  size?: Size
  tech?: Tech
}

// types

export type Kind = 'linear' | 'inset'
export type Size = 'xs' | 's'
export type Tech = 'svelte'
