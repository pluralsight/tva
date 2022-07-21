import type { Tech } from '../types'
import type { AvatarOptions, Size, Kind } from './types'

export const defaultAvatarOptions = {
  ariaLabel: '',
  kind: 'neutral' as Kind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export const iconSizeMap: Record<Size, string> = {
  xs: '1.5rem',
  s: '2.5rem',
  m: '4rem',
  l: '6rem',
  xl: '8rem',
}

export function getDefaultAvatarOptions(options?: AvatarOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? defaultAvatarOptions.ariaLabel,
    kind: options?.kind ?? defaultAvatarOptions.kind,
    size: options?.size ?? defaultAvatarOptions.size,
    tech: options?.tech ?? defaultAvatarOptions.tech,
  }
}

export function createAvatarSelectorClasses(kind: Kind, size: Size) {
  return {
    kindClass: `${kind}Avatar`,
    sizeClass: `${size}Avatar`,
  }
}

export function createAvatarProps(options: Required<AvatarOptions>) {
  return {
    avatar: {
      'aria-label': options.ariaLabel,
    },
    image: {
      'aria-hidden': true,
    },
    iconOptions: {
      ariaHidden: true,
      customSize: iconSizeMap[options.size],
      tech: options.tech,
    },
  }
}
