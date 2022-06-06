import { createClassProp } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size, tech } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const trackClass = `${size}Track`

  return {
    input: {
      ...inputProps,
      ...createClassProp(
        {
          svelteClass: `${SWITCH}-input input`,
          defaultClass: `${SWITCH}-input ${styles.input}`,
        },
        tech
      ),
    },
    switchContainer: createClassProp(
      {
        svelteClass: `${SWITCH}-container container`,
        defaultClass: `${SWITCH}-container ${styles.container}`,
      },
      tech
    ),
    switchTrack: {
      ...hidden,
      ...dataProps,
      ...createClassProp(
        {
          svelteClass: `${SWITCH}-track track ${size}Track`,
          defaultClass: `${SWITCH}-track ${styles[trackClass]}`,
        },
        tech
      ),
    },
    switchThumb: {
      ...dataProps,
      ...createClassProp(
        {
          svelteClass: `${SWITCH}-thumb thumb`,
          defaultClass: `${SWITCH}-thumb ${styles.thumb}`,
        },
        tech
      ),
    },
  }
}
