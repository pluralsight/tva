import { createClassProp } from '../../utils/helpers'
import { createInputOptions, getDefaultInputOptions } from './shared'
import type { InputOptions } from './types'
import styles from './inputCSS.module.css'

const INPUT_MESSAGE = 'ps-input'

export function getInputProps(options?: InputOptions) {
  const { tech, size, ...defaultOptions } = getDefaultInputOptions(options)
  const sizeClass = `${size}InputSize`

  return {
    ...createInputOptions(defaultOptions),
    ...createClassProp(tech, {
      defaultClass: `${INPUT_MESSAGE} ${styles[sizeClass]}`,
      svelteClass: `${INPUT_MESSAGE} inputBase ${sizeClass}`,
    }),
  }
}
