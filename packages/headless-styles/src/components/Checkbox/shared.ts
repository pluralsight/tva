import {
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../sharedDeafultOptions'
import type { CheckboxOptions } from './types'

export function getDefaultCheckboxOptions(options?: CheckboxOptions) {
  return getDefaultCheckboxFieldOptions(options)
}

export function getA11yProps(options: CheckboxOptions) {
  return getCheckboxFieldA11yProps(options, 'checkbox')
}
