import { createClassProp } from '../../utils/helpers'
import type { Tech } from '../types'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

function getForProp(tech: Tech) {
  return tech === 'svelte' ? 'for' : 'htmlFor'
}

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, size, tech, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const sizeClass = `${size}Label`
  const label = getFormValue(value, defaultOptions.required)

  return {
    [getForProp(tech)]: htmlFor,
    ...label,
    ...createClassProp(
      {
        svelteClass: `${FORM_LABEL} formLabelBase ${size}Label`,
        defaultClass: `${FORM_LABEL} ${styles[sizeClass]}`,
      },
      tech
    ),
  }
}
