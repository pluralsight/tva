import { createA11yProps } from '../../utils/helpers'
import type { SwitchOptions, Size, Tech } from './types'

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
  const a11yProps = createA11yProps(options)
  const inputA11yProps = {
    ['aria-invalid']: a11yProps['aria-invalid'],
    disabled: a11yProps.disabled,
    readOnly: a11yProps.readOnly,
    required: a11yProps.required,
  }
  const dataProps = {
    ['data-disabled']: a11yProps['data-disabled'],
    ['data-invalid']: a11yProps['data-invalid'],
    ['data-readonly']: a11yProps['data-readonly'],
    ['data-required']: a11yProps['data-required'],
  }

  return {
    inputProps: {
      ...inputA11yProps,
      id: options.id,
      type: 'checkbox',
    },
    dataProps: {
      ...dataProps,
      'data-checked': options.checked,
    },
    hidden: {
      'aria-hidden': 'true',
    },
  }
}
