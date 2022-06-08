import type { Tech } from '../types'
import type { FormControlOptions, GroupType } from './types'

const defaultFormControlOptions = {
  disabled: false,
  groupType: 'group' as GroupType,
  invalid: false,
  readOnly: false,
  required: false,
  tech: '' as Tech,
}

export function getDefaultFormControlOptions(options?: FormControlOptions) {
  return {
    disabled: options?.disabled ?? defaultFormControlOptions.disabled,
    groupType: options?.groupType ?? defaultFormControlOptions.groupType,
    invalid: options?.invalid ?? defaultFormControlOptions.invalid,
    readOnly: options?.readOnly ?? defaultFormControlOptions.readOnly,
    required: options?.required ?? defaultFormControlOptions.required,
    tech: options?.tech ?? defaultFormControlOptions.tech,
  }
}
