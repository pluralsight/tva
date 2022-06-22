import type { IconSize, Tech } from '../types'
import type {
  ButtonOptions,
  ButtonType,
  DangerOptions,
  DangerIconButtonOptions,
  DangerKind,
  IconButtonCommonReturn,
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

export function getDefaultIconButtonOptions(
  options?: IconButtonOptions
): Required<IconButtonOptions> {
  return {
    kind: options?.kind ?? defaultIconButtonOptions.kind,
    size: options?.size ?? defaultIconButtonOptions.size,
    tech: options?.tech ?? defaultIconButtonOptions.tech,
    ariaLabel: options?.ariaLabel ?? defaultIconButtonOptions.ariaLabel,
    variant: options?.variant ?? defaultIconButtonOptions.variant,
  }
}

export const defaultDangerIconButtonOptions = {
  ...defaultDangerButtonOptions,
  variant: 'default' as Variant,
  ariaLabel: '',
}

export function getDefaultDangerIconButtonOptions(
  options?: DangerIconButtonOptions
): Required<DangerIconButtonOptions> {
  return {
    kind: options?.kind ?? defaultDangerIconButtonOptions.kind,
    size: options?.size ?? defaultDangerIconButtonOptions.size,
    tech: options?.tech ?? defaultDangerIconButtonOptions.tech,
    ariaLabel: options?.ariaLabel ?? defaultDangerIconButtonOptions.ariaLabel,
    variant: options?.variant ?? defaultDangerIconButtonOptions.variant,
  }
}

export function getIconButtonReturnProps(
  options: Required<IconButtonOptions> | Required<DangerIconButtonOptions>
): IconButtonCommonReturn {
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
      size: iconButtonSizeMap[options.size],
      tech: options.tech,
    },
  }
}
