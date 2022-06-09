import { createA11yProps } from '../utils/helpers'
import type { CheckboxDirection, Tech } from './types'
import type { RadioOptions } from './Radio/types'
import type { CheckboxOptions } from './Checkbox/types'

export type AllCheckboxFieldOptions = CheckboxOptions | RadioOptions
export type CheckboxTypes = 'checkbox' | 'radio'

const defaultCheckboxOptions = {
  disabled: false,
  direction: 'row' as CheckboxDirection,
  id: '',
  invalid: false,
  tech: '' as Tech,
  checked: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export function getDefaultCheckboxFieldOptions(
  options?: AllCheckboxFieldOptions
) {
  return {
    checked: options?.checked ?? defaultCheckboxOptions.checked,
    direction: options?.direction ?? defaultCheckboxOptions.direction,
    disabled: options?.disabled ?? defaultCheckboxOptions.disabled,
    id: options?.id ?? defaultCheckboxOptions.id,
    invalid: options?.invalid ?? defaultCheckboxOptions.invalid,
    name: options?.name ?? defaultCheckboxOptions.name,
    required: options?.required ?? defaultCheckboxOptions.required,
    readOnly: options?.readOnly ?? defaultCheckboxOptions.readOnly,
    tech: options?.tech ?? defaultCheckboxOptions.tech,
    value: options?.value ?? defaultCheckboxOptions.value,
  }
}

export function createCheckboxFieldProps(options: AllCheckboxFieldOptions) {
  const { inputProps, dataProps, hidden } = getCheckboxFieldA11yProps(options)

  return {
    input: {
      ...inputProps,
    },
    container: {
      ...dataProps,
    },
    control: {
      ...hidden,
      ...dataProps,
    },
  }
}

export function getCheckboxFieldA11yProps(options: AllCheckboxFieldOptions) {
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
