import type { FormLabelOptions, Tech } from './types'

const defaultFormLabelOptions = {
  htmlFor: '',
  tech: '' as Tech,
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? defaultFormLabelOptions.htmlFor,
    tech: options?.tech ?? defaultFormLabelOptions.tech,
  }
}
