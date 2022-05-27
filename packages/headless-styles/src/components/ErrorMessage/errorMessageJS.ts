import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createErrorMessageProps,
  getDefaultErrorMessageOptions,
} from './shared'
import styles from './generated/errorMessageCSS.module'
import type { ErrorMessageOptions } from './types'

export const ChakraErrorMessage = {
  baseStyle: styles.errorMessage,
}

export function getJSErrorMessageProps(options?: ErrorMessageOptions) {
  const defaultOptions = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)
  const jsStyles = {
    ...styles.errorMessage,
  }

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createJSProps(transformStyles(jsStyles), jsStyles),
    },
  }
}
