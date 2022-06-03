import type {
  A11yBoolean,
  ButtonKind,
  ButtonSize,
  IconSize,
  Tech,
} from '../types'
import type { IconButtonOptions, Variant } from './types'

export const defaultIconButtonOptions = {
  kind: 'text' as ButtonKind,
  size: 'm' as ButtonSize,
  tech: '' as Tech,
  variant: 'default' as Variant,
  ariaLabel: '',
}

const iconButtonSizeMap: Record<ButtonSize, IconSize> = {
  xs: 's',
  s: 'm',
  m: 'm',
  l: 'l',
}

export function getDefaultIconButtonOptions(options?: IconButtonOptions) {
  const size = options?.size ?? defaultIconButtonOptions.size

  return {
    kind: options?.kind ?? defaultIconButtonOptions.kind,
    size,
    tech: options?.tech ?? defaultIconButtonOptions.tech,
    ariaLabel: options?.ariaLabel ?? defaultIconButtonOptions.ariaLabel,
    variant: options?.variant ?? defaultIconButtonOptions.variant,
    iconOptions: {
      ariaHidden: 'true' as A11yBoolean,
      size: iconButtonSizeMap[size],
    },
  }
}
