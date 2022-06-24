import { getButtonProps, getDangerButtonProps } from '../buttonCSS'
import {
  getButtonIconOptions,
  getDefaultOptions,
  getDefaultDangerOptions,
} from '../shared'
import type { ButtonOptions, DangerOptions } from '../types'

export function getDangerButtonWithIconProps(options?: DangerOptions) {
  const defaultOptions = getDefaultDangerOptions(options)

  return {
    button: getDangerButtonProps(defaultOptions),
    iconOptions: getButtonIconOptions(defaultOptions.size, defaultOptions.tech),
  }
}

export function getButtonWithIconProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultOptions(options)

  return {
    button: getButtonProps(defaultOptions),
    iconOptions: getButtonIconOptions(defaultOptions.size, defaultOptions.tech),
  }
}
