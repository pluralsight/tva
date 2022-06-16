import { createA11yProps } from '../../utils/helpers'
import type { Tech } from '../types'
import type { TextareaOptions, Resize } from './types'

const defaultTextareaOptions = {
  disabled: false,
  describedBy: '',
  id: '',
  invalid: false,
  name: '',
  placeholder: 'Enter text',
  readOnly: false,
  required: false,
  resize: 'initial' as Resize,
  tech: '' as Tech,
  value: '',
}

export function getDefaultTextareaOptions(options?: TextareaOptions) {
  return {
    disabled: options?.disabled ?? defaultTextareaOptions.disabled,
    describedBy: options?.describedBy ?? defaultTextareaOptions.describedBy,
    id: options?.id ?? defaultTextareaOptions.id,
    invalid: options?.invalid ?? defaultTextareaOptions.invalid,
    name: options?.name ?? defaultTextareaOptions.name,
    placeholder: options?.placeholder ?? defaultTextareaOptions.placeholder,
    readOnly: options?.readOnly ?? defaultTextareaOptions.readOnly,
    required: options?.required ?? defaultTextareaOptions.required,
    resize: options?.resize ?? defaultTextareaOptions.resize,
    tech: options?.tech ?? defaultTextareaOptions.tech,
    value: options?.value ?? defaultTextareaOptions.value,
  }
}

export function createTextareaOptions(options: TextareaOptions) {
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
    value: options.value,
  }
}
