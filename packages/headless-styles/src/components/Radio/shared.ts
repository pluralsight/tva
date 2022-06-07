import { createA11yProps } from '../../utils/helpers'
import type { RadioOptions, Direction, Tech } from './types'

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
      checked: options.checked,
      id: options.id,
      name: options.name,
      type: 'radio',
      value: options.value,
    },
    dataProps: {
      ...dataProps,
      'data-checked': options.checked,
    },
    hidden: {
      'aria-hidden': true,
    },
  }
}
