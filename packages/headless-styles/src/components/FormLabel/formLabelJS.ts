import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormLabelOptions } from './shared'
import styles from './generated/formLabelCSS.module'
import type { FormLabelOptions } from './types'

const formLabelStyles = styles.base

export const ChakraFormLabel = {
  baseStyle: formLabelStyles,
}

export function getJSFormLabelProps(options?: FormLabelOptions) {
  const defaultOptions = getDefaultFormLabelOptions(options)

  return {
    a11yProps: {
      htmlFor: defaultOptions.htmlFor,
    },
    label: {
      ...createJSProps(transformStyles(formLabelStyles), formLabelStyles),
    },
  }
}
