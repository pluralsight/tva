import { createClassProp } from '../../utils/helpers'
import { Tech } from '../types'
import { getDefaultIconOptions, getA11yIconProps } from './shared'
import type { IconOptions } from './types'
import styles from './iconCSS.module.css'

const ICON = 'ps-icon'

function getStyle(tech: Tech, style: Record<string, string>) {
  if (tech === 'svelte') {
    return `height: ${style.height}; width: ${style.width};`
  }

  return style
}

export function getIconProps(options?: IconOptions) {
  const defaultOptions = getDefaultIconOptions(options)
  const { size, tech, ...a11y } = defaultOptions
  const a11yProps = getA11yIconProps(a11y)
  const sizeClass = `${size}IconSize`

  return {
    ...a11yProps,
    ...createClassProp(tech, {
      svelteClass: `${ICON} psIcon ${sizeClass}`,
      defaultClass: `${ICON} ${styles[sizeClass]}`,
    }),
    ...(options?.customSize && {
      style: getStyle(tech, {
        height: options.customSize,
        width: options.customSize,
      }),
    }),
  }
}
