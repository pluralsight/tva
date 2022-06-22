import { createClassProp } from '../../utils/helpers'
import { Tech } from '../types'
import {
  getDefaultIconButtonOptions,
  getDefaultDangerIconButtonOptions,
  getIconButtonReturnProps,
} from './shared'
import type { IconButtonOptions, DangerIconButtonOptions } from './types'
import styles from './buttonCSS.module.css'

function createIconButton(
  tech: Tech,
  options: Required<IconButtonOptions> | Required<DangerIconButtonOptions>,
  classes: { global: string; variant: string; kind: string; size: string }
) {
  const props = getIconButtonReturnProps(options)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassProp(tech, {
        defaultClass: `${classes.global} ${styles[classes.variant]} ${
          styles[classes.kind]
        } ${styles[classes.size]}`,
        svelteClass: `base baseIconButton ${classes.variant} ${classes.kind} ${classes.size}`,
      }),
    },
  }
}

export function getDangerIconButtonProps(options?: DangerIconButtonOptions) {
  const defaultOptions = getDefaultDangerIconButtonOptions(options)

  return createIconButton(defaultOptions.tech, defaultOptions, {
    global: 'ps-danger-icon-btn',
    variant: `${defaultOptions.variant}IconButton`,
    kind: `${defaultOptions.kind}Danger`,
    size: defaultOptions.size,
  })
}

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)

  return createIconButton(defaultOptions.tech, defaultOptions, {
    global: 'ps-icon-btn',
    variant: `${defaultOptions.variant}IconButton`,
    kind: defaultOptions.kind,
    size: defaultOptions.size,
  })
}
