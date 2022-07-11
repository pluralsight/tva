import { createClassProp } from '../../utils/helpers'
import { getDefaultAlertOptions, createAlertProps } from './shared'
import styles from './alertCSS.module.css'
import type { AlertOptions } from './types'

const ALERT = 'ps-alert'

export function getAlertProps(options?: AlertOptions) {
  const { kind, tech } = getDefaultAlertOptions(options)
  const props = createAlertProps()
  const kindClass = `${kind}Alert`
  const iconClass = `${kind}IconWrapper`
  const textClass = `${kind}TextContainer`

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
        svelteClass: `${ALERT}-icon alertIconWrapper ${iconClass}`,
        defaultClass: `${ALERT}-icon ${styles[iconClass]}`,
      }),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassProp(tech, {
        svelteClass: `${ALERT}-text-container alertTextContainer ${textClass}`,
        defaultClass: `${ALERT}-text-container ${styles[textClass]}`,
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
        svelteClass: `${ALERT} alertWrapper ${kindClass}`,
        defaultClass: `${ALERT} ${styles[kindClass]}`,
      }),
    },
  }
}
