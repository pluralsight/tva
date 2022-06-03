import { getDefaultOptions, getDefaultDangerOptions } from './shared'
import { createSvelteObj } from '../../utils/helpers'
import type { ButtonType } from '../types'
import type { ButtonOptions, DangerOptions } from './types'
import styles from './buttonCSS.module.css'

type AllButtonOptions = ButtonOptions | DangerOptions

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
