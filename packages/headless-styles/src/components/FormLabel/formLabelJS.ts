import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './generated/formLabelCSS.module'
import type { FormLabelOptions } from './types'

const formLabelBase = styles.formLabelBase

export const ChakraFormLabel = {
  baseStyle: formLabelBase,
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: styles.sLabel,
    m: formLabelBase,
  },
}

export function getJSFormLabelProps(options?: FormLabelOptions) {
  const { value, ...defaultOptions } = getDefaultFormLabelOptions(options)
  const sizeClass = `${defaultOptions.size}Label` as 'mLabel' | 'sLabel'
  const label = getFormValue(value, defaultOptions.required)
  const formLabelStyles = {
    ...formLabelBase,
    ...styles[sizeClass],
  }

  return {
    a11yProps: {
      htmlFor: defaultOptions.htmlFor,
    },
    label: {
      ...createJSProps(transformStyles(formLabelStyles), formLabelStyles),
    },
    value: label,
  }
}
