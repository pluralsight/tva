import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createFieldMessageProps,
  getDefaultFieldMessageOptions,
} from './shared'
import styles from './generated/fieldMessageCSS.module'
import type { FieldMessageOptions } from './types'

export const ChakraFieldMessage = {
  baseStyle: styles.fieldMessage,
}

export function getJSFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)
  const jsStyles = {
    ...styles.fieldMessage,
  }

  return {
    message: {
      ...props,
    },
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
