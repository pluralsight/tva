import type { A11yBoolean, SwitchOptions, Size, Tech } from './types'

const defaultSwitchOptions = {
  disabled: 'false' as A11yBoolean,
  id: '',
  invalid: 'false' as A11yBoolean,
  label: '',
  size: 'm' as Size,
  tech: '' as Tech,
  checked: 'false' as A11yBoolean,
  required: 'false' as A11yBoolean,
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
