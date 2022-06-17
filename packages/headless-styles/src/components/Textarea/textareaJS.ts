import { createJSProps, transformStyles } from '../../utils/helpers'
import { createTextareaOptions, getDefaultTextareaOptions } from './shared'
import styles from './generated/textareaCSS.module'
import type { TextareaOptions } from './types'

export function getJSTextareaProps(options?: TextareaOptions) {
  const defaultOptions = getDefaultTextareaOptions(options)
  const textareaProps = createTextareaOptions(defaultOptions)
  const jsStyles = {
    ...styles.textareaBase,
    ...styles[`${defaultOptions.resize}Textarea`],
    ['&[data-disabled="true"]']: {
      ...styles.textareaBase_data_disabled__true,
    },
    ['&[data-invalid="true"]']: {
      ...styles.textareaBase_data_invalid__true,
    },
    ['&[data-readonly="true"]']: {
      ...styles.textareaBase_data_readonly__true,
    },
    ['&[data-disabled="true"]:hover']: {
      ...styles.textareaBase_data_disabled__true['&:hover'],
    },
    ['&[data-readonly="true"]:hover']: {
      ...styles.textareaBase_data_readonly__true['&:hover'],
    },
  }

  return {
    a11yProps: { ...textareaProps },
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
