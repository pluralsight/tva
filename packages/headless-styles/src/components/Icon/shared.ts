import type { IconSize, Tech } from '../types'
import type { IconOptions, IconA11yOptions } from './types'

export const defaultIconOptions = {
  size: 'm' as IconSize,
  tech: '' as Tech,
  ariaHidden: false,
}

export function createIconSelectorClasses(
  size?: IconSize,
  customSize?: string
) {
  const sizeSuffix = 'IconSize'

  return {
    sizeClass: customSize ? `custom${sizeSuffix}` : `${size}${sizeSuffix}`,
  }
}

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    ariaHidden: options?.ariaHidden ?? defaultIconOptions.ariaHidden,
    ariaLabel: options?.ariaLabel,
    customSize: options?.customSize,
    size: options?.size ?? defaultIconOptions.size,
    tech: options?.tech ?? defaultIconOptions.tech,
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    'aria-hidden': a11yOptions?.ariaHidden,
    ...(a11yOptions?.ariaLabel && {
      'aria-label': a11yOptions.ariaLabel,
    }),
    role: 'img',
  }
}
