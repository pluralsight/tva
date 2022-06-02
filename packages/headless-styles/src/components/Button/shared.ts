import { A11yBoolean } from '../Icon/types'
import type { IconSize, Tech } from '../types'
import type {
  ButtonOptions,
  DangerOptions,
  DangerKind,
  IconButtonOptions,
  Kind,
  Size,
  Variant,
} from './types'

export const defaultButtonOptions = {
  kind: 'text' as Kind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultOptions(options?: ButtonOptions) {
  return {
    kind: options?.kind ?? defaultButtonOptions.kind,
    size: options?.size ?? defaultButtonOptions.size,
    tech: options?.tech ?? defaultButtonOptions.tech,
  }
}

export const defaultDangerButtonOptions = {
  kind: 'text' as DangerKind,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultDangerOptions(options?: DangerOptions) {
  return {
    kind: options?.kind ?? defaultDangerButtonOptions.kind,
    size: options?.size ?? defaultDangerButtonOptions.size,
    tech: options?.tech ?? defaultDangerButtonOptions.tech,
  }
}

export const defaultIconButtonOptions = {
  kind: 'text' as Kind,
  size: 'm' as Size,
  tech: '' as Tech,
  variant: 'default' as Variant,
  ariaLabel: '',
}

const iconButtonSizeMap: Record<Size, IconSize> = {
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
