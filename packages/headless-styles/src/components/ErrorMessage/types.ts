export interface ErrorMessageOptions {
  id: string
  invalid: boolean
  message: string
  tech?: Tech
}

// types

export type Tech = 'svelte'
