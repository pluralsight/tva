import { createClassProp } from '../../utils/helpers'
import { getButtonProps } from '../Button/buttonCSS'
import styles from './iconButtonCSS.module.css'
import type { IconButtonOptions } from './types'
import { getDefaultIconButtonOptions } from './shared'

export function getIconButtonProps(options?: IconButtonOptions) {
  const { variant, ariaLabel, iconOptions, tech, ...buttonOptions } =
    getDefaultIconButtonOptions(options)
  const sizeClass = `${buttonOptions.size}IconButton`
  const variantClass = `${variant}IconButton`
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
        defaultClass: `${defaultClass} ps-icon-btn ${styles[sizeClass]} ${styles[variantClass]}`,
        svelteClass: `${svelteClass} baseIconButton ${sizeClass} ${variantClass}`,
      }),
    },
    iconOptions,
  }
}
