import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { htmlFor, size } = defaultOptions
  const { inputProps, dataProps, hidden, role } = getA11yProps(defaultOptions)
  const labelClass = `${size}Label`
  const trackClass = `${size}Track`

  if (defaultOptions.tech === 'svelte') {
    return {
      input: {
        ...inputProps,
        ...createSvelteObj(`${SWITCH}-input input`),
      },
      label: {
        for: htmlFor,
        ...createSvelteObj(`${SWITCH}-label label ${size}Label`),
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
      wrapper: {
        ...role,
        ...createSvelteObj(`${SWITCH} base`),
      },
    }
  }

  return {
    input: {
      ...inputProps,
      ...createCSSObj(`${SWITCH}-input ${styles.input}`),
    },
    label: {
      htmlFor,
      ...createCSSObj(`${SWITCH}-label ${styles[labelClass]}`),
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
    wrapper: {
      ...role,
      ...createCSSObj(`${SWITCH} ${styles.base}`),
    },
  }
}
