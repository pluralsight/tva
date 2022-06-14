import {
  createCheckboxFieldProps,
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../sharedDefaultOptions'
import type { CheckboxOptions } from './types'

interface DefaultCheckboxProps extends CheckboxOptions {
  indeterminate: boolean
}

export function getDefaultCheckboxOptions(options?: CheckboxOptions) {
  return {
    ...getDefaultCheckboxFieldOptions(options),
    indeterminate: options?.indeterminate ?? false,
  }
}

export function getA11yProps(options: CheckboxOptions) {
  return getCheckboxFieldA11yProps(options)
}

export function createCheckboxProps(options: DefaultCheckboxProps) {
  const props = createCheckboxFieldProps(options)

  return {
    iconOptions: {
      size: 's',
    },
    input: {
      ...props.input,
      indeterminate: options.indeterminate.toString(),
      type: 'checkbox',
    },
    checkboxContainer: {
      ...props.container,
    },
    checkboxControl: {
      ...props.control,
    },
  }
}
