import { createSvelteObj } from '../../utils/helpers'
import { getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech } = getDefaultProgressOptions(options)
  const sizeClass = `${size}Size`

  if (tech === 'svelte') {
    return createSvelteObj(`${PROGRESS} base ${sizeClass} ${kind}`)
  }

  return {
    className: `${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`,
  }
}
