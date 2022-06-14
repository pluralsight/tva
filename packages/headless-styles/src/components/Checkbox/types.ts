import type { CheckboxFieldOptions, Tech } from '../types'

export interface CheckboxOptions extends CheckboxFieldOptions {
  indeterminate?: boolean
  tech?: Tech
}
