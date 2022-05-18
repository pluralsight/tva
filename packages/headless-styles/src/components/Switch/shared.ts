import type { A11yBoolean, SwitchOptions, Size, Tech } from './types'

const defaultSwitchOptions = {
  disabled: 'false' as A11yBoolean,
  htmlFor: '',
  invalid: 'false' as A11yBoolean,
  label: '',
  size: 'm' as Size,
  tech: '' as Tech,
  checked: 'false' as A11yBoolean,
}

export function getDefaultSwitchOptions(options?: SwitchOptions) {
  return {
    disabled: options?.disabled ?? defaultSwitchOptions.disabled,
    htmlFor: options?.htmlFor ?? defaultSwitchOptions.htmlFor,
    invalid: options?.invalid ?? defaultSwitchOptions.invalid,
    label: options?.label ?? defaultSwitchOptions.label,
    size: options?.size ?? defaultSwitchOptions.size,
    tech: options?.tech ?? defaultSwitchOptions.tech,
    checked: options?.checked ?? defaultSwitchOptions.checked,
  }
}

export function getA11yProps(options: SwitchOptions) {
  const { disabled, invalid } = options

  return {
    inputProps: {
      'aria-disabled': disabled,
      'aria-invalid': invalid,
      disabled,
      id: options.htmlFor,
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
    role: {
      role: 'group',
    },
  }
}
