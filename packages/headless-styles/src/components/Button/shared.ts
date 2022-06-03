import type { ButtonKind, ButtonSize, Tech } from '../types'
import type { ButtonOptions, DangerOptions, DangerKind } from './types'

export const defaultButtonOptions = {
  kind: 'text' as ButtonKind,
  size: 'm' as ButtonSize,
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
  size: 'm' as ButtonSize,
  tech: '' as Tech,
}

export function getDefaultDangerOptions(options?: DangerOptions) {
  return {
    kind: options?.kind ?? defaultDangerButtonOptions.kind,
    size: options?.size ?? defaultDangerButtonOptions.size,
    tech: options?.tech ?? defaultDangerButtonOptions.tech,
  }
}
