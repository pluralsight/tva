export interface FormLabelOptions {
  htmlFor: string
  required?: boolean
  size?: Size
  tech?: Tech
  value: string
}

// types

export type Size = 's' | 'm'
export type Tech = 'svelte'
