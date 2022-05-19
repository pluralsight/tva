import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormLabelOptions } from './shared'
import styles from './generated/formLabelCSS.module'
import type { FormLabelOptions } from './types'

export const ChakraFormLabel = {
  baseStyle: styles.base,
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: styles.sLabel,
    m: styles.mLabel,
  },
}

export function getJSFormLabelProps(options?: FormLabelOptions) {
  const defaultOptions = getDefaultFormLabelOptions(options)
  const sizeClass = `${defaultOptions.size}Label` as 'mLabel' | 'sLabel'
  const formLabelStyles = {
    ...styles.base,
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
