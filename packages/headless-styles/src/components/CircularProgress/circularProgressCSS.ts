import { createClassProp } from '../../utils/helpers'
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

  return {
    containerProps: {
      ...a11yProps,
      ...createClassProp(
        {
          svelteClass: `${CIRC_PROGRESS} base`,
          defaultClass: `${CIRC_PROGRESS} ${styles.base}`,
        },
        tech
      ),
    },
    svgBoxProps: {
      ...createClassProp(
        {
          svelteClass: `${CIRC_PROGRESS}-box box ${styles[sizeClass]} ${kind}`,
          defaultClass: `${CIRC_PROGRESS}-box ${styles[sizeClass]} ${styles[kind]}`,
        },
        tech
      ),
      viewBox: VIEWBOX,
    },
    baseCircleProps: {
      ...baseCircleProps,
      ...createClassProp(
        {
          svelteClass: `${CIRC_PROGRESS}-base circle`,
          defaultClass: `${CIRC_PROGRESS}-base ${styles.circle}`,
        },
        tech
      ),
    },
    nowCircleProps: {
      ...baseCircleProps,
      ...createClassProp(
        {
          svelteClass: `${CIRC_PROGRESS}-now circleNow ${kind}`,
          defaultClass: `${CIRC_PROGRESS}-now ${styles.circleNow} ${styles[kind]}`,
        },
        tech
      ),
      ...getStrokeProps(now),
    },
    labelProps: {
      ...createClassProp(
        {
          svelteClass: `${CIRC_PROGRESS}-label text`,
          defaultClass: `${CIRC_PROGRESS}-label ${styles.text}`,
        },
        tech
      ),
      value,
    },
  }
}
