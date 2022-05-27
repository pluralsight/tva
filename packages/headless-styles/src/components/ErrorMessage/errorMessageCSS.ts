import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import {
  getDefaultErrorMessageOptions,
  createErrorMessageProps,
} from './shared'
import type { ErrorMessageOptions } from './types'
import styles from './errorMessageCSS.module.css'

const ERROR_MESSAGE = 'ps-error-message'

export function getErrorMessageProps(options?: ErrorMessageOptions) {
  const { tech, ...defaultOptions } = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)

  if (tech === 'svelte') {
    return {
      ...errorProps,
      message: {
        ...errorProps.message,
        ...createSvelteObj(`${ERROR_MESSAGE} errorMessage`),
      },
    }
  }

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createCSSObj(`${ERROR_MESSAGE} ${styles.errorMessage}`),
    },
  }
}
