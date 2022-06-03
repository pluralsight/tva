import { createClassProp } from '../../utils/helpers'
import { getButtonProps } from '../../../src'
import styles from './iconButtonCSS.module.css'
import type { IconButtonOptions } from './types'
import { getDefaultIconButtonOptions } from './shared'

// Public

export function getIconButtonProps(options?: IconButtonOptions) {
  const { variant, ariaLabel, iconOptions, tech, ...buttonOptions } =
    getDefaultIconButtonOptions(options)
  const sizeClass = `${buttonOptions.size}IconButton`
  const buttonPropsDefault = getButtonProps(buttonOptions)
  const buttonPropsSvelte = getButtonProps({
    ...buttonOptions,
    tech: 'svelte',
  })
  const defaultClass =
    buttonPropsDefault['className' as keyof typeof buttonPropsDefault]
  const svelteClass =
    buttonPropsSvelte['class' as keyof typeof buttonPropsSvelte]
  const buttonProps = tech === 'svelte' ? buttonPropsSvelte : buttonPropsDefault

  return {
    button: {
      ...buttonProps,
      'aria-label': ariaLabel,
      ...createClassProp(tech, {
        defaultClass: `${defaultClass} ps-icon-btn ${styles[sizeClass]} ${styles[variant]}`,
        svelteClass: `${svelteClass} ${sizeClass} ${variant}`,
      }),
    },
    iconOptions,
  }
}
