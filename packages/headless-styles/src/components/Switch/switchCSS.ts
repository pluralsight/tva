import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const { htmlFor, size, value, ...defaultOptions } =
    getDefaultSwitchOptions(options)
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
  const inputValues = {
    'data-checked': value,
    'data-disabled': defaultOptions.disabled,
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
        ...inputValues,
        ...createSvelteObj(`${SWITCH}-track track ${size}Track`),
      },
      switchThumb: {
        ...inputValues,
        ...createSvelteObj(`${SWITCH}-thumb thumb ${size}Thumb`),
      },
      wrapper: {
        ...a11yRole,
        ...createSvelteObj(`${SWITCH} base`),
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
      ...inputValues,
      ...createCSSObj(`${SWITCH}-track ${styles[trackClass]}`),
    },
    switchThumb: {
      ...inputValues,
      ...createCSSObj(`${SWITCH}-thumb ${styles[thumbClass]}`),
    },
    wrapper: {
      ...a11yRole,
      ...createCSSObj(`${SWITCH} ${styles.base}`),
    },
  }
}
