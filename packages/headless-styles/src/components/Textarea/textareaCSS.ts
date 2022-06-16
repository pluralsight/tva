import { createClassProp } from '../../utils/helpers'
import { createTextareaOptions, getDefaultTextareaOptions } from './shared'
import type { TextareaOptions } from './types'
import styles from './textareaCSS.module.css'

const TEXTAREA_MESSAGE = 'ps-textarea'

export function getTextareaProps(options?: TextareaOptions) {
  const { tech, resize, ...defaultOptions } = getDefaultTextareaOptions(options)
  const resizeClass = `${resize}Textarea`

  return {
    ...createTextareaOptions(defaultOptions),
    ...createClassProp(tech, {
      defaultClass: `${TEXTAREA_MESSAGE} ${styles[resizeClass]}`,
      svelteClass: `${TEXTAREA_MESSAGE} textareaBase ${resizeClass}`,
    }),
  }
}
