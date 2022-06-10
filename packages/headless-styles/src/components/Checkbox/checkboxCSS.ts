import { createClassProp } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './checkboxCSS.module.css'

const CHECKBOX = 'ps-checkbox'

export function getCheckboxProps(options?: CheckboxOptions) {
  const { direction, tech, ...defaultOptions } =
    getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)
  const directionClass = `checkbox${direction}`

  return {
    ...props,
    input: {
      ...props.input,
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-input ${styles.checkboxInput}`,
        svelteClass: `${CHECKBOX}-input checkboxInput`,
      }),
    },
    checkboxContainer: {
      ...props.checkboxContainer,
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-container ${styles.checkboxContainer} ${styles[directionClass]}`,
        svelteClass: `${CHECKBOX}-container checkboxContainer ${directionClass}`,
      }),
    },
    checkboxControl: {
      ...props.checkboxControl,
      ...createClassProp(tech, {
        defaultClass: `${CHECKBOX}-control ${styles.checkboxControl}`,
        svelteClass: `${CHECKBOX}-control checkboxControl`,
      }),
    },
  }
}
