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
  const isIndeterminate = kind === 'indeterminate'
  const kindKey = styles[kind]
  const now = a11y.now
  const value = `${now}%`
  const svgBoxStyles = {
    ...kindKey,
    ...styles[`${size}Size` as StyleKey],
    animationName: isIndeterminate
      ? styles.indeterminate_box.animationName
      : '',
    width: size === 'xs' ? styles.xsSize.width : styles.box.width,
  }
  const nowStyles = {
    ...styles.circleNow,
    ...kindKey,
    animationName: isIndeterminate ? styles.indeterminate.animationName : '',
  }

  return {
    containerProps: {
      a11yProps,
      ...createJSProps(transformStyles(styles.base), styles.base),
    },
    svgBoxProps: {
      ...createJSProps(transformStyles(svgBoxStyles), svgBoxStyles),
      keyframes: styles.keyframesSpin['@keyframes spin'],
      svgProps: {
        viewBox: VIEWBOX,
      },
    },
    baseCircleProps: {
      svgProps: baseCircleProps,
      ...createJSProps(transformStyles(styles.circle), styles.circle),
    },
    nowCircleProps: {
      keyframes: styles.keyframesLoading['@keyframes loading'],
      svgProps: {
        ...baseCircleProps,
        ...getStrokeProps(now),
      },
      ...createJSProps(transformStyles(nowStyles), nowStyles),
    },
    labelProps: {
      ...createJSProps(transformStyles(styles.text), styles.text),
      value,
    },
  }
}
