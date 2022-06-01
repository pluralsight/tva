import type { Tech } from '../types'
import type { InputOptions, InputType, Size } from './types'

const defaultInputOptions = {
  disabled: false,
  placeholder: 'Enter text',
  id: '',
  invalid: false,
  name: '',
  readOnly: false,
  required: false,
  size: 'l' as Size,
  tech: '' as Tech,
  type: 'text' as InputType,
  value: '',
}

export function getDefaultInputOptions(options?: InputOptions) {
  return {
    disabled: options?.disabled ?? defaultInputOptions.disabled,
    placeholder: options?.placeholder ?? defaultInputOptions.placeholder,
    id: options?.id ?? defaultInputOptions.id,
    invalid: options?.invalid ?? defaultInputOptions.invalid,
    name: options?.name ?? defaultInputOptions.name,
    readOnly: options?.readOnly ?? defaultInputOptions.readOnly,
    required: options?.required ?? defaultInputOptions.required,
    size: options?.size ?? defaultInputOptions.size,
    tech: options?.tech ?? defaultInputOptions.tech,
    type: options?.type ?? defaultInputOptions.type,
    value: options?.value ?? defaultInputOptions.value,
  }
}

export function createA11yOptions(options: InputOptions) {
  const { disabled, required } = options

  return {
    ['data-disabled']: disabled,
    ['data-invalid']: options?.invalid,
    ['data-readonly']: options?.readOnly,
    ['data-required']: required,
    disabled,
    required,
  }
}
