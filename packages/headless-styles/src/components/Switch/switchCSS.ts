import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const trackClass = `${size}Track`

  if (defaultOptions.tech === 'svelte') {
    return {
      input: {
        ...inputProps,
        ...createSvelteObj(`${SWITCH}-input input`),
      },
      switchContainer: createSvelteObj(`${SWITCH}-container container`),
      switchTrack: {
        ...hidden,
        ...dataProps,
        ...createSvelteObj(`${SWITCH}-track track ${size}Track`),
      },
      switchThumb: {
        ...dataProps,
        ...createSvelteObj(`${SWITCH}-thumb thumb`),
      },
    }
  }

  return {
    input: {
      ...inputProps,
      ...createCSSObj(`${SWITCH}-input ${styles.input}`),
    },
    switchContainer: createCSSObj(`${SWITCH}-container ${styles.container}`),
    switchTrack: {
      ...hidden,
      ...dataProps,
      ...createCSSObj(`${SWITCH}-track ${styles[trackClass]}`),
    },
    switchThumb: {
      ...dataProps,
      ...createCSSObj(`${SWITCH}-thumb ${styles.thumb}`),
    },
  }
}
