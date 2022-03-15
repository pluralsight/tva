import type { ButtonOptions, Kind, Size } from './types'

export const defaultButtonOptions = {
  kind: 'text' as Kind,
  size: 'm' as Size,
}

export function getDefaultOptions(options?: ButtonOptions) {
  return {
    kind: options?.kind ?? defaultButtonOptions.kind,
    size: options?.size ?? defaultButtonOptions.size,
  }
}
