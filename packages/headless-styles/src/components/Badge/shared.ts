import type { BadgeOptions, Kind, Tech } from './types'

const defaultBadgeOptions = {
  kind: 'strong' as Kind,
  tech: '' as Tech,
}

export function getDefaultBadgeOptions(options?: BadgeOptions) {
  return {
    kind: options?.kind ?? defaultBadgeOptions.kind,
    tech: options?.tech ?? defaultBadgeOptions.tech,
  }
}
