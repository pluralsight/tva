import type { Tech } from '../types'
import type { FieldMessageOptions } from './types'

const defaultFieldMessageOptions = {
  id: '',
  message: '',
  tech: '' as Tech,
}

export function getDefaultFieldMessageOptions(options?: FieldMessageOptions) {
  return {
    id: options?.id ?? defaultFieldMessageOptions.id,
    message: options?.message ?? defaultFieldMessageOptions.message,
    tech: options?.tech ?? defaultFieldMessageOptions.tech,
  }
}

export function createFieldMessageProps(options: FieldMessageOptions) {
  return {
    id: options.id,
    value: options.message,
  }
}
