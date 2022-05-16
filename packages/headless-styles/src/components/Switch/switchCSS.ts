import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const { htmlFor, size, ...defaultOptions } = getDefaultSwitchOptions(options)
  const sizeClass = `${size}Size`
  const labelClass = `${size}Label`
  const trackClass = `${size}Track`
  const thumbClass = `${size}Thumb`
  const a11yInputProps = {
    'aria-disabled': defaultOptions.disabled,
    'aria-invalid': defaultOptions.invalid,
    id: htmlFor,
    type: 'checkbox',
  }
  const a11yHidden = {
    'aria-hidden': 'true',
  }
  const a11yRole = {
    role: 'group',
  }

  if (defaultOptions.tech === 'svelte') {
    return {
      input: {
        ...a11yInputProps,
        ...createSvelteObj(`${SWITCH}-input input`),
      },
      label: {
        htmlFor,
        ...createSvelteObj(`${SWITCH}-label label ${size}Label`),
      },
      switchContainer: createSvelteObj(`${SWITCH}-container container`),
      switchTrack: {
        ...a11yHidden,
        ...createSvelteObj(`${SWITCH}-track track ${size}Track`),
      },
      switchThumb: createSvelteObj(`${SWITCH}-thumb thumb ${size}Thumb`),
      wrapper: {
        ...a11yRole,
        ...createSvelteObj(`${SWITCH} ${sizeClass}`),
      },
    }
  }

  return {
    input: {
      ...a11yInputProps,
      ...createCSSObj(`${SWITCH}-input ${styles.input}`),
    },
    label: {
      htmlFor,
      ...createCSSObj(`${SWITCH}-label ${styles[labelClass]}`),
    },
    switchContainer: createCSSObj(`${SWITCH}-container ${styles.container}`),
    switchTrack: {
      ...a11yHidden,
      ...createCSSObj(`${SWITCH}-track ${styles[trackClass]}`),
    },
    switchThumb: createCSSObj(`${SWITCH}-thumb ${styles[thumbClass]}`),
    wrapper: {
      ...a11yRole,
      ...createCSSObj(`${SWITCH} ${styles[sizeClass]}`),
    },
  }
}
