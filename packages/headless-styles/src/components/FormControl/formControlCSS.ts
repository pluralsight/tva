import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import styles from './formControlCSS.module.css'
import { FormControlOptions } from './types'

const FORM_CONTROL = 'ps-form-control'

export function getFormControlProps(options?: FormControlOptions) {
  const { tech, groupType, ...fieldOptions } =
    getDefaultFormControlOptions(options)
  const role = {
    role: groupType,
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
