import { createClassProp } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../sharedDefaultOptions'
import { getDefaultRadioOptions } from './shared'
import type { RadioOptions } from './types'
import styles from './radioCSS.module.css'

const RADIO = 'ps-radio'

export function getRadioProps(options?: RadioOptions) {
  const { direction, tech, ...defaultOptions } = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
  const directionClass = `radio${direction}`

  return {
    input: {
      ...props.input,
      type: 'radio',
      ...createClassProp(tech, {
        defaultClass: `${RADIO}-input ${styles.radioInput}`,
        svelteClass: `${RADIO}-input radioInput`,
      }),
    },
    radioContainer: {
      ...props.container,
      ...createClassProp(tech, {
        defaultClass: `${RADIO}-container ${styles.radioContainer} ${styles[directionClass]}`,
        svelteClass: `${RADIO}-container radioContainer radio${direction}`,
      }),
    },
    radioControl: {
      ...props.control,
      ...createClassProp(tech, {
        defaultClass: `${RADIO}-control ${styles.radioControl}`,
        svelteClass: `${RADIO}-control radioControl`,
      }),
    },
  }
}
