import type {
  ButtonOptions,
  DangerOptions,
  DangerKind,
  Kind,
  Size,
  Tech,
} from './types'

export const defaultButtonOptions = {
  kind: 'text' as Kind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultOptions(options?: ButtonOptions) {
  return {
    kind: options?.kind ?? defaultButtonOptions.kind,
    size: options?.size ?? defaultButtonOptions.size,
    tech: options?.tech ?? defaultButtonOptions.tech,
  }
}

export const defaultDangerButtonOptions = {
  kind: 'text' as DangerKind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultDangerOptions(options?: DangerOptions) {
  return {
    kind: options?.kind ?? defaultDangerButtonOptions.kind,
    size: options?.size ?? defaultDangerButtonOptions.size,
    tech: options?.tech ?? defaultDangerButtonOptions.tech,
  }
}
