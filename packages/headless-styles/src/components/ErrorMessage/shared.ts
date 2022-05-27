import type { ErrorMessageOptions, Tech } from './types'

function getErrorMessageA11yProps() {
  return {
    'aria-live': 'polite',
  }
}

// PUBLIC

const defaultErrorMessageOptions = {
  id: '',
  invalid: false,
  message: '',
  tech: '' as Tech,
}

export function getDefaultErrorMessageOptions(options?: ErrorMessageOptions) {
  return {
    id: options?.id ?? defaultErrorMessageOptions.id,
    invalid: options?.invalid ?? defaultErrorMessageOptions.invalid,
    message: options?.message ?? defaultErrorMessageOptions.message,
    tech: options?.tech ?? defaultErrorMessageOptions.tech,
  }
}

export function createErrorMessageProps(options: ErrorMessageOptions) {
  return {
    container: {
      ...getErrorMessageA11yProps(),
      id: options.id,
    },
    message: {
      value: options.invalid ? options.message : '',
    },
  }
}
