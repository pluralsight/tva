import { BadgeOptions } from './types'

const defaultBadgeOptions = {
  kind: 'strong',
  tech: '',
}

export function getDefaultBadgeOptions(options?: BadgeOptions) {
  return {
    kind: options?.kind ?? defaultBadgeOptions.kind,
    tech: options?.tech ?? defaultBadgeOptions.tech,
  }
}
