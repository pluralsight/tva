import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import { getA11yProgressProps, getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const sizeClass = `${size}Size`
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
    bar: {
      ...a11yProps,
      ...createCSSObj(`${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`),
      style,
    },
    wrapper: createCSSObj(
      `${PROGRESS} ${styles.wrapper} ${styles[sizeClass]} ${styles[kind]}`
    ),
  }

  // return {
  //   ...a11yProps,
  //   style,
  //   classes: {
  //     bar: createCSSObj(`${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`),
  //     wrapper: createCSSObj(
  //       `${PROGRESS} ${styles.wrapper} ${styles[sizeClass]} ${styles[kind]}`
  //     ),
  //   },
  // }
}
