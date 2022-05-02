import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech } = getDefaultProgressOptions(options)
  const sizeClass = `${size}Size`

  if (tech === 'svelte') {
    return {
      bar: createSvelteObj(`${PROGRESS} bar ${sizeClass} ${kind}`),
      wrapper: createSvelteObj(`${PROGRESS} wrapper ${sizeClass} ${kind}`),
    }
  }

  return {
    bar: createCSSObj(`${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`),
    wrapper: createCSSObj(
      `${PROGRESS} ${styles.wrapper} ${styles[sizeClass]} ${styles[kind]}`
    ),
  }
}
