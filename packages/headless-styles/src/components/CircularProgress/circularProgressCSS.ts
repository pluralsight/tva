import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import {
  baseCircleProps,
  getA11yCircularProgressProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './circularProgressCSS.module.css'

const CIRC_PROGRESS = 'ps-circular-progress'

export function getCircularProgressProps(options?: CircularProgressOptions) {
  const { kind, size, tech, ...a11y } =
    getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const sizeClass = `${size}Size`
  const now = a11y.now
  const value = `${now}%`

  if (tech === 'svelte') {
    return {
      containerProps: {
        ...a11yProps,
        ...createSvelteObj(`${CIRC_PROGRESS} base`),
      },
      svgBoxProps: {
        ...createSvelteObj(
          `${CIRC_PROGRESS}_box box ${styles[sizeClass]} ${kind}`
        ),
        viewBox: VIEWBOX,
      },
      baseCircleProps: {
        ...baseCircleProps,
        ...createSvelteObj(`${CIRC_PROGRESS}_base circle`),
      },
      nowCircleProps: {
        ...baseCircleProps,
        ...createSvelteObj(`${CIRC_PROGRESS}_now circleNow`),
        ...getStrokeProps(now),
      },
      labelProps: {
        ...createSvelteObj(`${CIRC_PROGRESS}_label text`),
        value,
      },
    }
  }

  return {
    containerProps: {
      ...a11yProps,
      ...createCSSObj(`${CIRC_PROGRESS} ${styles.base}`),
    },
    svgBoxProps: {
      ...createCSSObj(
        `${CIRC_PROGRESS}-box ${styles[sizeClass]} ${styles[kind]}`
      ),
      viewBox: VIEWBOX,
    },
    baseCircleProps: {
      ...baseCircleProps,
      ...createCSSObj(`${CIRC_PROGRESS}-base ${styles.circle}`),
    },
    nowCircleProps: {
      ...baseCircleProps,
      ...createCSSObj(
        `${CIRC_PROGRESS}-now ${styles.circleNow} ${styles[kind]}`
      ),
      ...getStrokeProps(now),
    },
    labelProps: {
      ...createCSSObj(`${CIRC_PROGRESS}-label ${styles.text}`),
      value,
    },
  }
}
