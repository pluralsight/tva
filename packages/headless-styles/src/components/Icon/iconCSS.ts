import { getDefaultIconOptions, getA11yIconProps } from './shared'
import { createClassProp } from '../../utils/helpers'
import type { IconOptions } from './types'
import styles from './iconCSS.module.css'

const ICON = 'ps-icon'

export function getIconProps(options?: IconOptions) {
  const defaultOptions = getDefaultIconOptions(options)
  const { size, tech, ...a11y } = defaultOptions
  const a11yProps = getA11yIconProps(a11y)
  const sizeClass = `${size}IconSize`

  return {
    ...a11yProps,
    ...createClassProp(
      {
        svelteClass: `${ICON} psIcon ${sizeClass}`,
        defaultClass: `${ICON} ${styles[sizeClass]}`,
      },
      tech
    ),
  }
}
