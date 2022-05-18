import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import styles from './generated/formControlCSS.module'
import type { FormControlOptions } from './types'

export const ChakraFormControl = {
  baseStyle: styles.base,
}

export function getJSFormControlProps(options?: FormControlOptions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tech, ...fieldOptions } = getDefaultFormControlOptions(options)
  const jsStyles = {
    ...styles.base,
  }

  return {
    a11yProps: {
      role: 'group',
    },
    control: {
      ...createJSProps(transformStyles(jsStyles), jsStyles),
    },
    fieldOptions,
  }
}
