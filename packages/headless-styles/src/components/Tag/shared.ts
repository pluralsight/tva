import type { Tech } from '../types'
import type { TagOptions, Kind, Size } from './types'

export const defaultTagOptions = {
  kind: 'weak' as Kind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultOptions(options?: TagOptions) {
  return {
    kind: options?.kind ?? defaultTagOptions.kind,
    size: options?.size ?? defaultTagOptions.size,
    tech: options?.tech ?? defaultTagOptions.tech,
  }
}
