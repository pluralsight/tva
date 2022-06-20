import type { IconSize, Tech } from '../types'
import type {
  ButtonOptions,
  DangerOptions,
  DangerKind,
  IconButtonOptions,
  Kind,
  Size,
  Variant,
  ButtonType,
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

export function getDefaultIconButtonOptions(options?: IconButtonOptions) {
  return {
    kind: options?.kind ?? defaultIconButtonOptions.kind,
    size: options?.size ?? defaultIconButtonOptions.size,
    tech: options?.tech ?? defaultIconButtonOptions.tech,
    ariaLabel: options?.ariaLabel ?? defaultIconButtonOptions.ariaLabel,
    variant: options?.variant ?? defaultIconButtonOptions.variant,
  }
}

export function getIconButtonReturnProps(options: IconButtonOptions) {
  const iconButtonSizeMap: Record<Size, IconSize> = {
    xs: 's',
    s: 'm',
    m: 'm',
    l: 'l',
  }

  return {
    button: {
      'aria-label': options.ariaLabel,
      type: 'button' as ButtonType,
    },
    iconOptions: {
      ariaHidden: true,
      size: iconButtonSizeMap[options.size as Size],
      tech: options.tech,
    },
  }
}
