import { createClassProp } from '../../utils/helpers'
import {
  getDefaultFieldMessageOptions,
  createFieldMessageProps,
} from './shared'
import type { FieldMessageOptions } from './types'
import styles from './fieldMessageCSS.module.css'

const FIELD_MESSAGE = 'ps-field-message'

export function getFieldMessageProps(options?: FieldMessageOptions) {
  const { tech, ...defaultOptions } = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)

  return {
    ...props,
    ...createClassProp(tech, {
      defaultClass: `${FIELD_MESSAGE} ${styles.fieldMessage}`,
      svelteClass: `${FIELD_MESSAGE} fieldMessage`,
    }),
  }
}
