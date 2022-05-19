import type { FormLabelOptions, Size, Tech } from './types'

const defaultFormLabelOptions = {
  htmlFor: '',
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? defaultFormLabelOptions.htmlFor,
    size: options?.size ?? defaultFormLabelOptions.size,
    tech: options?.tech ?? defaultFormLabelOptions.tech,
  }
}
