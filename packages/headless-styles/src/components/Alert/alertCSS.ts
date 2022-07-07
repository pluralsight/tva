import { createClassProp } from '../../utils/helpers'
import { getDefaultAlertOptions, createAlertProps } from './shared'
import styles from './alertCSS.module.css'
import type { AlertOptions } from './types'

const ALERT = 'ps-alert'

export function getAlertProps(options?: AlertOptions) {
  const { kind, tech } = getDefaultAlertOptions(options)
  const props = createAlertProps()
  const kindClass = `${kind}Alert`

  return {
    ...props,
    description: {
      ...props.description,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-description alertDescription`,
        defaultClass: `${ALERT}-description ${styles.alertDescription}`,
      }),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-icon alertIconWrapper`,
        defaultClass: `${ALERT}-icon ${styles.alertIconWrapper}`,
      }),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-text-container alertTextContainer`,
        defaultClass: `${ALERT}-text-container ${styles.alertTextContainer}`,
      }),
    },
    title: {
      ...props.title,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-title alertTitle`,
        defaultClass: `${ALERT}-title ${styles.alertTitle}`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${ALERT} ${kindClass}`,
        defaultClass: `${ALERT} ${styles[kindClass]}`,
      }),
    },
  }
}
