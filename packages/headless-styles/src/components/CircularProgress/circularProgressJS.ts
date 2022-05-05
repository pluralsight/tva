import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  baseCircleProps,
  getA11yCircularProgressProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './generated/circularProgressCSS.module'

export const ChakraCircularProgress = {
  parts: ['filledTrack', 'track', 'label'],
  baseStyle: {
    filledTrack: styles.circleNow,
    track: styles.circle,
    label: styles.text,
  },
  defaultProps: {
    variant: 'determinate',
    size: 'm',
  },
  sizes: {
    xs: {
      track: styles.xsSize,
    },
    m: {
      track: styles.base,
    },
  },
  variants: {
    determinate: {
      filledTrack: styles.circleNow,
      track: styles.circle,
    },
    indeterminate: {
      filledTrack: styles.circleNow,
      track: styles.circle,
    },
  },
}

export type StyleKey = keyof typeof styles

export function getJSCircularProgressProps(options?: CircularProgressOptions) {
  const { kind, size, ...a11y } = getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const sizeClass = `${size}Size`
  const now = a11y.now
  const value = `${now}%`
  const containerStyles = {
    ...styles.base,
    ...styles[kind as StyleKey],
  }
  const svgBoxStyles = {
    ...styles.box,
    ...styles[sizeClass as StyleKey],
  }

  return {
    containerProps: {
      a11yProps,
      keyframes: styles.keyframesSpin['@keyframes spin'],
      ...createJSProps(transformStyles(containerStyles), containerStyles),
    },
    svgBoxProps: {
      ...createJSProps(transformStyles(svgBoxStyles), svgBoxStyles),
      svgProps: {
        viewBox: VIEWBOX,
      },
    },
    baseCircleProps: {
      svgProps: baseCircleProps,
      ...createJSProps(transformStyles(styles.circle), styles.circle),
    },
    nowCircleProps: {
      svgProps: {
        ...baseCircleProps,
        ...getStrokeProps(now),
      },
      ...createJSProps(transformStyles(styles.circleNow), styles.circleNow),
    },
    labelProps: {
      ...createJSProps(transformStyles(styles.text), styles.text),
      value,
    },
  }
}
