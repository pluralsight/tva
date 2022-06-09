import {
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
