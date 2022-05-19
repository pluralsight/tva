import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import styles from './formControlCSS.module.css'
import { FormControlOptions } from './types'

const FORM_CONTROL = 'ps-form-control'

export function getFormControlProps(options?: FormControlOptions) {
  const { tech, ...fieldOptions } = getDefaultFormControlOptions(options)
  const role = {
    role: 'group',
  }

  if (tech === 'svelte') {
    return {
      control: {
        ...role,
        ...createSvelteObj(`${FORM_CONTROL} formControlBase`),
      },
      fieldOptions,
    }
  }

  return {
    control: {
      ...role,
      ...createCSSObj(`${FORM_CONTROL} ${styles.formControlBase}`),
    },
    fieldOptions,
  }
}
