import { createClassProp } from '../../utils/helpers'
import {
  getDefaultAlertDialogOptions,
  createAlertDialogProps,
  createAlertDialogSelectorClasses,
} from './shared'
import styles from './alertDialogCSS.module.css'
import type { AlertDialogOptions } from './types'

const ALERT_DIALOG = 'ps-alert-dialog'

export function getAlertDialogProps(options?: AlertDialogOptions) {
  const { tech, ...defaultOptions } = getDefaultAlertDialogOptions(options)
  const props = createAlertDialogProps(defaultOptions)
  const { kindClass } = createAlertDialogSelectorClasses(defaultOptions.kind)

  return {
    ...props,
    backdrop: {
      ...props.backdrop,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogBackdrop`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogBackdrop}`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogWrapper ${kindClass}`,
        defaultClass: `${ALERT_DIALOG} ${styles[kindClass]}`,
      }),
    },
  }
}
