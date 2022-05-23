import type { FormLabelOptions, Size, Tech } from './types'

const defaultFormLabelOptions = {
  htmlFor: '',
  required: false,
  size: 'm' as Size,
  tech: '' as Tech,
  value: 'Form label',
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? defaultFormLabelOptions.htmlFor,
    required: options?.required ?? defaultFormLabelOptions.required,
    size: options?.size ?? defaultFormLabelOptions.size,
    tech: options?.tech ?? defaultFormLabelOptions.tech,
    value: options?.value ?? defaultFormLabelOptions.value,
  }
}

export function getFormValue(value: string, required: boolean) {
  let label = value

  if (required) {
    label = `${value} (required)`
  }

  return {
    value: label,
  }
}
