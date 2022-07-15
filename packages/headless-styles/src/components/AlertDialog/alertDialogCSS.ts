import { createClassProp } from '../../utils/helpers'
import {
  getDefaultAlertDialogOptions,
  createAlertDialogProps,
  // createAlertDialogSelectorClasses,
} from './shared'
import styles from './alertDialogCSS.module.css'
import type { AlertDialogOptions } from './types'

const ALERT_DIALOG = 'ps-alert-dialog'

export function getAlertDialogProps(options?: AlertDialogOptions) {
  const { tech, ...defaultOptions } = getDefaultAlertDialogOptions(options)
  const props = createAlertDialogProps(defaultOptions)
  // const { kindClass } = createAlertDialogSelectorClasses(defaultOptions.kind)

  return {
    ...props,
    alertTitle: {
      ...props.alertTitle,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogTitle`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogTitle}`,
      }),
    },
    alertBody: {
      ...props.alertBody,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogBody`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogBody}`,
      }),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogBackdrop`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogBackdrop}`,
      }),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogBtnGroup`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogBtnGroup}`,
      }),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogCancelBtn`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogCancelBtn}`,
      }),
    },
    section: {
      ...props.section,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogSection`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogSection}`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG} alertDialogWrapper`,
        defaultClass: `${ALERT_DIALOG} ${styles.alertDialogWrapper}`,
      }),
    },
  }
}
