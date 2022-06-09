import { getDefaultCheckboxFieldOptions } from '../sharedDefaultOptions'
import type { RadioOptions } from './types'

export function getDefaultRadioOptions(options?: RadioOptions) {
  return getDefaultCheckboxFieldOptions(options)
}
