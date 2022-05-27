import type { ErrorMessageOptions, Tech } from './types'

function getErrorMessageA11yProps() {
  return {
    'aria-live': 'polite',
  }
}

// PUBLIC

const defaultErrorMessageOptions = {
  invalid: false,
  message: '',
  tech: '' as Tech,
}

export function getDefaultErrorMessageOptions(options?: ErrorMessageOptions) {
  return {
    invalid: options?.invalid ?? defaultErrorMessageOptions.invalid,
    message: options?.message ?? defaultErrorMessageOptions.message,
    tech: options?.tech ?? defaultErrorMessageOptions.tech,
  }
}

export function createErrorMessageProps(options: ErrorMessageOptions) {
  return {
    container: {
      ...getErrorMessageA11yProps(),
    },
    message: {
      value: options.invalid ? options.message : '',
    },
  }
}
