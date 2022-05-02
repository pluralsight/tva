import type { ProgressOptions, Kind, Size, Tech } from './types'

const defaultProgressOptions = {
  kind: 'linear' as Kind,
  size: 's' as Size,
  tech: '' as Tech,
}

export function getDefaultProgressOptions(options?: ProgressOptions) {
  return {
    kind: options?.kind ?? defaultProgressOptions.kind,
    size: options?.size ?? defaultProgressOptions.size,
    tech: options?.tech ?? defaultProgressOptions.tech,
  }
}
