import type { IconOptions, IconA11yOptions, Size, Tech } from './types'

const a11yRole = 'img'
const a11yPropMap = {
  ariaHidden: 'aria-hidden',
  label: 'aria-label',
}

export const defaultIconOptions = {
  size: 'm' as Size,
  tech: '' as Tech,
  ariaHidden: false,
}

export function getDefaultOptions(options?: IconOptions) {
  return {
    size: options?.size ?? defaultIconOptions.size,
    tech: options?.tech ?? defaultIconOptions.tech,
    ariaHidden: options?.ariaHidden ?? defaultIconOptions.ariaHidden,
    label: options?.label,
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    [a11yPropMap.ariaHidden]: a11yOptions?.ariaHidden,
    ...(a11yOptions?.label && { [a11yPropMap.label]: a11yOptions.label }),
    role: a11yRole,
  }
}