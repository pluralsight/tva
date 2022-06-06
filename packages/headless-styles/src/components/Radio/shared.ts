import type { Tech } from '../types'
import type { RadioOptions, Direction } from './types'

const defaultRadioOptions = {
  disabled: false,
  direction: 'row' as Direction,
  id: '',
  invalid: false,
  tech: '' as Tech,
  checked: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export function getDefaultRadioOptions(options?: RadioOptions) {
  return {
    checked: options?.checked ?? defaultRadioOptions.checked,
    direction: options?.direction ?? defaultRadioOptions.direction,
    disabled: options?.disabled ?? defaultRadioOptions.disabled,
    id: options?.id ?? defaultRadioOptions.id,
    invalid: options?.invalid ?? defaultRadioOptions.invalid,
    name: options?.name ?? defaultRadioOptions.name,
    required: options?.required ?? defaultRadioOptions.required,
    readOnly: options?.readOnly ?? defaultRadioOptions.readOnly,
    tech: options?.tech ?? defaultRadioOptions.tech,
    value: options?.value ?? defaultRadioOptions.value,
  }
}

export function getA11yProps(options: RadioOptions) {
  const { disabled, invalid } = options

  return {
    inputProps: {
      'aria-disabled': disabled,
      'aria-invalid': invalid,
      checked: options.checked,
      disabled,
      id: options.id,
      name: options.name,
      type: 'radio',
      value: options.value,
    },
    dataProps: {
      'data-checked': options.checked,
      'data-disabled': disabled,
      'data-invalid': invalid,
      'data-readonly': options.readOnly,
    },
    hidden: {
      'aria-hidden': true,
    },
  }
}
