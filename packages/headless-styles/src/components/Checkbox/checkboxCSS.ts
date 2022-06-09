import { createClassProp } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../sharedDeafultOptions'
import { getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './checkboxCSS.module.css'

const CHECKBOX = 'ps-checkbox'

export function getCheckboxProps(options?: CheckboxOptions) {
  const { direction, tech, ...defaultOptions } =
    getDefaultCheckboxOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
  const directionClass = `checkbox${direction}`

  return {
    iconOptions: {
      size: 's',
    },
    input: {
      ...props.input,
      type: 'checkbox',
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-input ${styles.checkboxInput}`,
        svelteClass: `${CHECKBOX}-input checkboxInput`,
      }),
    },
    checkboxContainer: {
      ...props.container,
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-container ${styles.checkboxContainer} ${styles[directionClass]}`,
        svelteClass: `${CHECKBOX}-container checkboxContainer ${directionClass}`,
      }),
    },
    checkboxControl: {
      ...props.control,
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-control ${styles.checkboxControl}`,
        svelteClass: `${CHECKBOX}-control checkboxControl`,
      }),
    },
  }
}
