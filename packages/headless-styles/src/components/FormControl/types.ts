import type { FieldStates, Tech } from '../types'

export interface FormControlOptions extends FieldStates {
  groupType?: GroupType
  tech?: Tech
}

// types

export type GroupType = 'group' | 'radiogroup'
