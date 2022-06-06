import type { Tech } from '../types'
import type { SwitchOptions, Size } from './types'

const defaultSwitchOptions = {
  disabled: false,
  id: '',
  invalid: false,
  label: '',
  size: 'm' as Size,
  tech: '' as Tech,
  checked: false,
  required: false,
}

export function getDefaultSwitchOptions(options?: SwitchOptions) {
  return {
    checked: options?.checked ?? defaultSwitchOptions.checked,
    disabled: options?.disabled ?? defaultSwitchOptions.disabled,
    id: options?.id ?? defaultSwitchOptions.id,
    invalid: options?.invalid ?? defaultSwitchOptions.invalid,
    label: options?.label ?? defaultSwitchOptions.label,
    required: options?.required ?? defaultSwitchOptions.required,
    size: options?.size ?? defaultSwitchOptions.size,
    tech: options?.tech ?? defaultSwitchOptions.tech,
  }
}

export function getA11yProps(options: SwitchOptions) {
  const { disabled, invalid } = options

  return {
    inputProps: {
      'aria-disabled': disabled,
      'aria-invalid': invalid,
      disabled,
      id: options.id,
      type: 'checkbox',
    },
    dataProps: {
      'data-checked': options.checked,
      'data-disabled': disabled,
      'data-invalid': invalid,
    },
    hidden: {
      'aria-hidden': 'true',
    },
  }
}
