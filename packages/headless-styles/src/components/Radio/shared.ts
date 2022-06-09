import { getDefaultCheckboxFieldOptions } from '../sharedDeafultOptions'
import type { RadioOptions } from './types'

export function getDefaultRadioOptions(options?: RadioOptions) {
  return getDefaultCheckboxFieldOptions(options)
}
