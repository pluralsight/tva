import type { Tech } from '../types'
import type { SkeletonOptions, Kind } from './types'

const defaultSkeletonOptions = {
  kind: 'content' as Kind,
  tech: '' as Tech,
}

export function getDefaultSkeletonOptions(options?: SkeletonOptions) {
  return {
    kind: options?.kind ?? defaultSkeletonOptions.kind,
    tech: options?.tech ?? defaultSkeletonOptions.tech,
  }
}
