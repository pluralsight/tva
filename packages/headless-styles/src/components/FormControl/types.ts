import type { FieldOptions } from '../types'

export interface FormControlOptions extends FieldOptions {
  groupType?: GroupType
  tech?: Tech
}

// types

export type GroupType = 'group' | 'radiogroup'
export type Tech = 'svelte'
