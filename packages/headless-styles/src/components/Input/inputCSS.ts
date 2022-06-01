import { createClassProp } from '../../utils/helpers'
import { createA11yOptions, getDefaultInputOptions } from './shared'
import type { InputOptions } from './types'
import styles from './inputCSS.module.css'

const INPUT_MESSAGE = 'ps-input'

export function getInputProps(options?: InputOptions) {
  const { tech, size, ...defaultOptions } = getDefaultInputOptions(options)
  const sizeClass = `${size}InputSize`

  return {
    ...createA11yOptions(defaultOptions),
    ...createClassProp(tech, {
      defaultClass: `${INPUT_MESSAGE} ${styles[sizeClass]}`,
      svelteClass: `${INPUT_MESSAGE} baseInput ${sizeClass}`,
    }),
  }
}
