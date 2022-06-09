import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getA11yProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './radioCSS.module.css'

const CHECKBOX = 'ps-checkbox'

export function getCheckboxProps(options?: CheckboxOptions) {
  const { direction, ...defaultOptions } = getDefaultCheckboxOptions(options)
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const directionClass = `checkbox${direction}`

  if (defaultOptions.tech === 'svelte') {
    return {
      input: {
        ...inputProps,
        ...createSvelteObj(`${CHECKBOX}-input radioInput`),
      },
      radioContainer: {
        ...dataProps,
        ...createSvelteObj(
          `${CHECKBOX}-container radioContainer radio${direction}`
        ),
      },
      radioControl: {
        ...hidden,
        ...dataProps,
        ...createSvelteObj(`${CHECKBOX}-control radioControl`),
      },
    }
  }

  return {
    input: {
      ...inputProps,
      ...createCSSObj(`${CHECKBOX}-input ${styles.radioInput}`),
    },
    radioContainer: {
      ...dataProps,
      ...createCSSObj(
        `${CHECKBOX}-container ${styles.radioContainer} ${styles[directionClass]}`
      ),
    },
    radioControl: {
      ...hidden,
      ...dataProps,
      ...createCSSObj(`${CHECKBOX}-control ${styles.radioControl}`),
    },
  }
}
