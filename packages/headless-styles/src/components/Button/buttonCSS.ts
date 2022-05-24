import {
  getDefaultOptions,
  getDefaultDangerOptions,
  getDefaultIconLabelOptions,
} from './shared'
import { createSvelteObj } from '../../utils/helpers'
import type {
  ButtonOptions,
  ButtonType,
  DangerOptions,
  IconLabelOptions,
  Size,
} from './types'
import styles from './buttonCSS.module.css'
import { getIconProps } from '../Icon/iconCSS'
import type { Size as IconSize } from '../Icon/types'

type AllButtonOptions = ButtonOptions | DangerOptions | IconLabelOptions

interface ButtonClass {
  defaultClass: string
  svelteClass: string
}

function createButton(options: AllButtonOptions, classes: ButtonClass) {
  if (options.tech === 'svelte') {
    return createSvelteObj(classes.svelteClass)
  }

  return {
    className: classes.defaultClass,
    type: 'button' as ButtonType,
  }
}

// Public

export function getDangerButtonProps(options?: DangerOptions) {
  const defaultOptions = getDefaultDangerOptions(options)
  const { kind, size } = defaultOptions
  const dangerKind = `${kind}Danger`

  return createButton(defaultOptions, {
    defaultClass: `ps-danger-btn ${styles[dangerKind]} ${styles[size]}`,
    svelteClass: `base ${kind}Danger ${size}`,
  })
}

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultOptions(options)
  const { kind, size } = defaultOptions

  return createButton(defaultOptions, {
    defaultClass: `ps-btn ${styles[kind]} ${styles[size]}`,
    svelteClass: `base ${kind} ${size}`,
  })
}

const iconSizeMap: Record<Size, IconSize> = {
  xs: 's' as IconSize,
  s: 's' as IconSize,
  m: 'm' as IconSize,
  l: 'm' as IconSize,
}

export function getButtonIconLabelProps(options?: IconLabelOptions) {
  const defaultOptions = getDefaultIconLabelOptions(options)
  const { kind, size, position, tech } = defaultOptions
  const iconLabelPosition = `${position}IconLabel`

  const buttonProps = createButton(defaultOptions, {
    defaultClass: `ps-icon-label-btn ${styles[kind]} ${styles[size]} ${styles[iconLabelPosition]}`,
    svelteClass: `base ${kind} ${size} ${iconLabelPosition}`,
  })

  const iconProps = getIconProps({
    size: iconSizeMap[size],
    ariaHidden: 'true',
    tech: tech,
  })

  return { buttonProps, iconProps }
}
