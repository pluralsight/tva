import type { FormControlOptions, Tech } from './types'

const defaultFormControlOptions = {
  disabled: false,
  invalid: false,
  readOnly: false,
  required: false,
  tech: '' as Tech,
}

export function getDefaultFormControlOptions(options?: FormControlOptions) {
  return {
    disabled: options?.disabled ?? defaultFormControlOptions.disabled,
    invalid: options?.invalid ?? defaultFormControlOptions.invalid,
    readOnly: options?.readOnly ?? defaultFormControlOptions.readOnly,
    required: options?.required ?? defaultFormControlOptions.required,
    tech: options?.tech ?? defaultFormControlOptions.tech,
  }
}
