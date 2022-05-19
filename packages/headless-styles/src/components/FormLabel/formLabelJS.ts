import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormLabelOptions } from './shared'
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
  const defaultOptions = getDefaultFormLabelOptions(options)
  const sizeClass = `${defaultOptions.size}Label` as 'mLabel' | 'sLabel'
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
  }
}
