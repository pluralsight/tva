import { createJSProps, transformStyles } from '../../utils/helpers'
import { createInputOptions, getDefaultInputOptions } from './shared'
import styles from './generated/InputCSS.module'
import type { InputOptions } from './types'

export function getJSInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const inputProps = createInputOptions(defaultOptions)
  const jsStyles = {
    ...styles.inputBase,
    ...styles[`${defaultOptions.size}InputSize`],
    ['&::placeholder']: {
      ...styles['']['&::placeholder'],
    },
    ['&[data-disabled="true"]']: {
      ...styles.inputBase_data_disabled__true,
    },
    ['&[data-invalid="true"]']: {
      ...styles.inputBase_data_invalid__true,
    },
    ['&[data-readonly="true"]']: {
      ...styles.inputBase_data_readonly__true,
    },
    ['&[data-disabled="true"]:hover']: {
      ...styles.inputBase_data_disabled__true['&:hover'],
    },
    ['&[data-readonly="true"]:hover']: {
      ...styles.inputBase_data_readonly__true['&:hover'],
    },
  }

  return {
    a11yProps: { ...inputProps },
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
