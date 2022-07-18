import { createClassProp } from '../../utils/helpers'
import { getDefaultAlertDialogOptions, createAlertDialogProps } from './shared'
import styles from './alertDialogCSS.module.css'
import type { AlertDialogOptions } from './types'

const ALERT_DIALOG = 'ps-alert-dialog'

export function getAlertDialogProps(options?: AlertDialogOptions) {
  const { tech, ...defaultOptions } = getDefaultAlertDialogOptions(options)
  const props = createAlertDialogProps(defaultOptions)

  return {
    ...props,
    alertTitle: {
      ...props.alertTitle,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-title alertDialogTitle`,
        defaultClass: `${ALERT_DIALOG}-title ${styles.alertDialogTitle}`,
      }),
    },
    alertBody: {
      ...props.alertBody,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-body alertDialogBody`,
        defaultClass: `${ALERT_DIALOG}-body ${styles.alertDialogBody}`,
      }),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-backdrop alertDialogBackdrop`,
        defaultClass: `${ALERT_DIALOG}-backdrop ${styles.alertDialogBackdrop}`,
      }),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-btn-group alertDialogBtnGroup`,
        defaultClass: `${ALERT_DIALOG}-btn-group ${styles.alertDialogBtnGroup}`,
      }),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-cancel alertDialogCancelBtn`,
        defaultClass: `${ALERT_DIALOG}-cancel ${styles.alertDialogCancelBtn}`,
      }),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-focus-guard alertFocusGuard`,
        defaultClass: `${ALERT_DIALOG}-focus-guard ${styles.alertFocusGuard}`,
      }),
    },
    section: {
      ...props.section,
      ...createClassProp(tech, {
        svelteClass: `${ALERT_DIALOG}-section alertDialogSection`,
        defaultClass: `${ALERT_DIALOG}-section ${styles.alertDialogSection}`,
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
