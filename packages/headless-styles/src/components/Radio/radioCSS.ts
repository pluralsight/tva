import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getA11yProps, getDefaultRadioOptions } from './shared'
import styles from './radioCSS.module.css'
import { RadioOptions } from './types'

const RADIO = 'ps-radio'

export function getRadioProps(options?: RadioOptions) {
  const { direction, ...defaultOptions } = getDefaultRadioOptions(options)
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const directionClass = `radio${direction}`

  if (defaultOptions.tech === 'svelte') {
    return {
      input: {
        ...inputProps,
        ...createSvelteObj(`${RADIO}-input radioInput`),
      },
      radioContainer: {
        ...dataProps,
        ...createSvelteObj(
          `${RADIO}-container radioContainer radio${direction}`
        ),
      },
      radioControl: {
        ...hidden,
        ...dataProps,
        ...createSvelteObj(`${RADIO}-control radioControl`),
      },
    }
  }

  return {
    input: {
      ...inputProps,
      ...createCSSObj(`${RADIO}-input ${styles.radioInput}`),
    },
    radioContainer: {
      ...dataProps,
      ...createCSSObj(
        `${RADIO}-container ${styles.radioContainer} ${styles[directionClass]}`
      ),
    },
    radioControl: {
      ...hidden,
      ...dataProps,
      ...createCSSObj(`${RADIO}-control ${styles.radioControl}`),
    },
  }
}
