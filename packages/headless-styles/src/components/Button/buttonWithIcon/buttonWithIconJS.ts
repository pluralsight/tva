import { getJSButtonProps, getJSDangerButtonProps } from '../buttonJS'
import {
  getButtonIconOptions,
  getDefaultOptions,
  getDefaultDangerOptions,
} from '../shared'
import type { ButtonOptions, DangerOptions } from '../types'

export function getJSDangerButtonWithIconProps(options?: DangerOptions) {
  const defaultOptions = getDefaultDangerOptions(options)

  return {
    button: getJSDangerButtonProps(defaultOptions),
    iconOptions: getButtonIconOptions(defaultOptions.size, defaultOptions.tech),
  }
}

export function getJSButtonWithIconProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultOptions(options)

  return {
    button: getJSButtonProps(defaultOptions),
    iconOptions: getButtonIconOptions(defaultOptions.size, defaultOptions.tech),
  }
}
