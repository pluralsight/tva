import { createA11yProps } from '../../utils/helpers'
import type { Tech } from '../types'
import type { InputOptions, InputType, Size } from './types'

const defaultInputOptions = {
  disabled: false,
  describedBy: '',
  id: '',
  invalid: false,
  name: '',
  placeholder: 'Enter text',
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
    describedBy: options?.describedBy ?? defaultInputOptions.describedBy,
    id: options?.id ?? defaultInputOptions.id,
    invalid: options?.invalid ?? defaultInputOptions.invalid,
    name: options?.name ?? defaultInputOptions.name,
    placeholder: options?.placeholder ?? defaultInputOptions.placeholder,
    readOnly: options?.readOnly ?? defaultInputOptions.readOnly,
    required: options?.required ?? defaultInputOptions.required,
    size: options?.size ?? defaultInputOptions.size,
    tech: options?.tech ?? defaultInputOptions.tech,
    type: options?.type ?? defaultInputOptions.type,
    value: options?.value ?? defaultInputOptions.value,
  }
}

export function createInputOptions(options: InputOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
    type: options.type,
    value: options.value,
  }
}
