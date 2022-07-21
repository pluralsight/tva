import { createJSProps, transformStyles } from '../../utils/helpers'
import { createAlertDialogProps, getDefaultAlertDialogOptions } from './shared'
import styles from './generated/alertDialogCSS.module'
import type { AlertDialogOptions } from './types'

export function getJSAlertDialogProps(options?: AlertDialogOptions) {
  const defaultOptions = getDefaultAlertDialogOptions(options)
  const props = createAlertDialogProps(defaultOptions)
  const backdropStyles = {
    ...styles.alertDialogBackdrop,
    background: styles['']['&:root']['-PsBackdrop'],
  }
  const btnGroupStyles = {
    ...styles.alertDialogBtnGroup,
    ...styles.alertDialogBtnGroup_button,
  }

  return {
    ...props,
    alertTitle: {
      a11yProps: {
        ...props.alertTitle,
      },
      ...createJSProps(
        transformStyles(styles.alertDialogTitle),
        styles.alertDialogTitle
      ),
    },
    alertBody: {
      a11yProps: {
        ...props.alertBody,
      },
      ...createJSProps(
        transformStyles(styles.alertDialogBody),
        styles.alertDialogBody
      ),
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(transformStyles(backdropStyles), backdropStyles),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(transformStyles(btnGroupStyles), btnGroupStyles),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createJSProps(
        transformStyles(styles.alertDialogCancelBtn),
        styles.alertDialogCancelBtn
      ),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(
        transformStyles(styles.alertFocusGuard),
        styles.alertFocusGuard
      ),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(
          transformStyles(styles.keyframesFadeIn),
          styles.keyframesFadeIn
        ),
      },
      ...createJSProps(
        transformStyles(styles.alertDialogSection),
        styles.alertDialogSection
      ),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(
        transformStyles(styles.alertDialogWrapper),
        styles.alertDialogWrapper
      ),
    },
  }
}
