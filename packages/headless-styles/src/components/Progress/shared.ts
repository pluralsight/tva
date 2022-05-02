import type { ProgressOptions, Kind, Size, Tech } from './types'

const defaultProgressOptions = {
  kind: 'linear' as Kind,
  max: 100,
  min: 0,
  now: 0,
  size: 's' as Size,
  tech: '' as Tech,
}

export function getDefaultProgressOptions(options?: ProgressOptions) {
  return {
    kind: options?.kind ?? defaultProgressOptions.kind,
    max: options?.max ?? defaultProgressOptions.max,
    min: options?.min ?? defaultProgressOptions.min,
    now: options?.now ?? defaultProgressOptions.now,
    size: options?.size ?? defaultProgressOptions.size,
    tech: options?.tech ?? defaultProgressOptions.tech,
  }
}
