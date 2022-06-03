import { A11yBoolean, IconSize } from '../types'

export interface IconA11yOptions {
  label?: string
  ariaHidden?: A11yBoolean
}

export interface IconOptions extends IconA11yOptions {
  size?: IconSize
  tech?: Tech
}

// types

export type Tech = 'svelte' | ''
