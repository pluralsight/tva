import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultFormLabelOptions } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, tech } = getDefaultFormLabelOptions(options)

  if (tech === 'svelte') {
    return {
      for: htmlFor,
      ...createSvelteObj(`${FORM_LABEL} base`),
    }
  }

  return {
    htmlFor,
    ...createCSSObj(`${FORM_LABEL} ${styles.base}`),
  }
}
