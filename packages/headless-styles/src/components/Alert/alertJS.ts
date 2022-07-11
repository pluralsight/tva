import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createAlertProps,
  createAlertSelectorClasses,
  getDefaultAlertOptions,
} from './shared'
import styles from './generated/alertCSS.module'
import type { AlertOptions } from './types'

type StylesKey = keyof typeof styles

export function getJSAlertProps(options?: AlertOptions) {
  const defaultOptions = getDefaultAlertOptions(options)
  const props = createAlertProps()
  const { kindClass, iconClass, textClass } = createAlertSelectorClasses(
    defaultOptions.kind
  )
  const descStyles = {
    ...styles.alertText,
    ...styles.alertDescription,
  }
  const iconWrapperStyles = {
    ...styles.alertIconWrapper,
    ...styles[iconClass as StylesKey],
  }
  const textContainerStyles = {
    ...styles.alertTextContainer,
    ...styles[textClass as StylesKey],
  }
  const wrapperStyles = {
    ...styles.alertWrapper,
    ...styles[kindClass as StylesKey],
  }

  return {
    ...props,
    description: {
      ...props.description,
      ...createJSProps(transformStyles(descStyles), descStyles),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createJSProps(transformStyles(iconWrapperStyles), iconWrapperStyles),
    },
    textContainer: {
      ...props.textContainer,
      ...createJSProps(
        transformStyles(textContainerStyles),
        textContainerStyles
      ),
    },
    title: {
      ...props.title,
      ...createJSProps(transformStyles(styles.alertTitle), styles.alertTitle),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(transformStyles(wrapperStyles), wrapperStyles),
    },
  }
}
