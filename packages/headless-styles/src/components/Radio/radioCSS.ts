import { createClassProp } from '../../utils/helpers'
import { getA11yProps, getDefaultRadioOptions } from './shared'
import styles from './radioCSS.module.css'
import { RadioOptions } from './types'

const RADIO = 'ps-radio'

export function getRadioProps(options?: RadioOptions) {
  const { direction, tech, ...defaultOptions } = getDefaultRadioOptions(options)
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const directionClass = `radio${direction}`

  return {
    input: {
      ...inputProps,
      ...createClassProp(
        {
          svelteClass: `${RADIO}-input radioInput`,
          defaultClass: `${RADIO}-input ${styles.radioInput}`,
        },
        tech
      ),
    },
    radioContainer: {
      ...dataProps,
      ...createClassProp(
        {
          svelteClass: `${RADIO}-container radioContainer radio${direction}`,
          defaultClass: `${RADIO}-container ${styles.radioContainer} ${styles[directionClass]}`,
        },
        tech
      ),
    },
    radioControl: {
      ...hidden,
      ...dataProps,
      ...createClassProp(
        {
          svelteClass: `${RADIO}-control radioControl`,
          defaultClass: `${RADIO}-control ${styles.radioControl}`,
        },
        tech
      ),
    },
  }
}
