import { createClassProp } from '../../utils/helpers'
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

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createClassProp(tech, {
        defaultClass: `${ERROR_MESSAGE} ${styles.errorMessage}`,
        svelteClass: `${ERROR_MESSAGE} errorMessage`,
      }),
    },
  }
}
