import { createClassProp } from '../../utils/helpers'
import { getDefaultAlertOptions, createAlertProps } from './shared'
import styles from './alertCSS.module.css'
import type { AlertOptions } from './types'

const ALERT = 'ps-alert'

export function getAlertProps(options?: AlertOptions) {
  const { kind, tech } = getDefaultAlertOptions(options)
  const props = createAlertProps()

  return {
    ...props,
    description: {
      ...props.descriptionProps,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-description alertDescription`,
        defaultClass: `${ALERT}-description ${styles.alertDescription}`,
      }),
    },
    iconWrapper: {
      ...props.iconWrapperProps,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-icon alertIconWrapper`,
        defaultClass: `${ALERT}-icon ${styles.alertIconWrapper}`,
      }),
    },
    title: {
      ...props.titleProps,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-title alertTitle`,
        defaultClass: `${ALERT}-title ${styles.alertTitle}`,
      }),
    },
    wrapper: {
      ...props.wrapperProps,
      ...createClassProp(tech, {
        svelteClass: `${ALERT} alertWrapper ${kind}`,
        defaultClass: `${ALERT} ${styles[kind]}`,
      }),
    },
  }
}
