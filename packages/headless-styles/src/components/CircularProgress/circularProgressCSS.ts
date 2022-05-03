import { createCSSObj, createSvelteObj } from '../../utils/helpers'
import {
  getA11yCircularProgressProps,
  getDefaultCircularProgressOptions,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './circularProgressCSS.module.css'

const CIRC_PROGRESS = 'ps-circular-progress'
const DASH_OFFSET = '66'
const baseCircleProps = {
  cx: '50',
  cy: '50',
  r: '42',
  strokeWidth: '12px',
}

function getDashArray(nowValue: number) {
  const dash = nowValue * 2.64
  const gap = 264 - dash
  return `${dash} ${gap}`
}

export function getCircularProgressProps(options?: CircularProgressOptions) {
  const { kind, size, tech, ...a11y } =
    getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y)
  const sizeClass = `${size}Size`
  const now = a11y.now
  const value = `${now}%`

  if (tech === 'svelte') {
    return {
      containerProps: {
        ...a11yProps,
        ...createSvelteObj(`${CIRC_PROGRESS} base ${kind}`),
      },
      svgBoxProps: {
        ...createSvelteObj(`${CIRC_PROGRESS}_box box ${sizeClass}`),
        viewBox: '0 0 100 100',
      },
      baseCircleProps: {
        ...baseCircleProps,
        ...createSvelteObj(`${CIRC_PROGRESS}_base circle`),
      },
      nowCircleProps: {
        ...baseCircleProps,
        ...createSvelteObj(`${CIRC_PROGRESS}_now circleNow`),
        strokeDashoffset: DASH_OFFSET,
        strokeDasharray: getDashArray(now),
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
      ...createCSSObj(`${CIRC_PROGRESS} ${styles.base} ${styles[kind]}`),
    },
    svgBoxProps: {
      ...createCSSObj(`${CIRC_PROGRESS}_box ${styles.box} ${sizeClass}`),
      viewBox: '0 0 100 100',
    },
    baseCircleProps: {
      ...baseCircleProps,
      ...createCSSObj(`${CIRC_PROGRESS}_base ${styles.circle}`),
    },
    nowCircleProps: {
      ...baseCircleProps,
      ...createCSSObj(`${CIRC_PROGRESS}_now ${styles.circleNow}`),
      strokeDashoffset: DASH_OFFSET,
      strokeDasharray: getDashArray(now),
    },
    labelProps: {
      ...createCSSObj(`${CIRC_PROGRESS}_label ${styles.text}`),
      value,
    },
  }
}
