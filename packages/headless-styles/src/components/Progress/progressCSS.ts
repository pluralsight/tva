import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech, ...a11y } = getDefaultProgressOptions(options)
  const sizeClass = `${size}Size`
  const a11yProps = {
    'aria-valuemax': a11y.max,
    'aria-valuemin': a11y.min,
    'aria-valuenow': a11y.now,
    role: 'progressbar',
  }
  const style = {
    width: `${a11y.now}%`,
  }

  if (tech === 'svelte') {
    return {
      ...a11yProps,
      style,
      classes: {
        bar: createSvelteObj(`${PROGRESS} bar ${sizeClass} ${kind}`),
        wrapper: createSvelteObj(`${PROGRESS} wrapper ${sizeClass} ${kind}`),
      },
    }
  }

  return {
    ...a11yProps,
    style,
    classes: {
      bar: createCSSObj(`${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`),
      wrapper: createCSSObj(
        `${PROGRESS} ${styles.wrapper} ${styles[sizeClass]} ${styles[kind]}`
      ),
    },
  }
}
