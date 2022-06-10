import {
  createCheckboxFieldProps,
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../sharedDefaultOptions'
import type { CheckboxOptions } from './types'

export function getDefaultCheckboxOptions(options?: CheckboxOptions) {
  return getDefaultCheckboxFieldOptions(options)
}

export function getA11yProps(options: CheckboxOptions) {
  return getCheckboxFieldA11yProps(options)
}

export function createCheckboxProps(options: CheckboxOptions) {
  const props = createCheckboxFieldProps(options)

  return {
    iconOptions: {
      size: 's',
    },
    input: {
      ...props.input,
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
