import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yProgressProps, getDefaultProgressOptions } from './shared'
import styles from './generated/progressCSS.module'
import type { ProgressOptions } from './types'

export const muiReset = {
  bottom: 'initial',
  display: 'block',
  left: 'initial',
  position: 'initial',
  top: 'initial',
  transformOrigin: 'initial',
}

export const ChakraProgress = {
  parts: ['filledTrack', 'track'],
  baseStyle: {
    filledTrack: styles.bar,
    track: styles.wrapper,
  },
  defaultProps: {
    variant: 'linear',
    size: 's',
  },
  sizes: {
    xs: {
      track: styles.xsSize,
    },
    s: {
      track: styles.sSize,
    },
  },
  variants: {
    linear: {
      filledTrack: styles.linear,
      track: styles.linear,
    },
    inset: {
      filledTrack: styles.inset,
      track: styles.inset,
    },
  },
}

export type StyleKey = keyof typeof styles

export function getJSProgressProps(options?: ProgressOptions) {
  const { kind, size, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const sizeKey = `${size}Size`
  const defaultStyles = {
    ...styles[kind as StyleKey],
    ...styles[sizeKey as StyleKey],
  }
  const barStyles = {
    ...styles.bar,
    ...defaultStyles,
    width: `${a11y.now}%`,
  }
  const wrapperStyles = {
    ...styles.wrapper,
    ...defaultStyles,
  }

  return {
    a11yProps,
    bar: createJSProps(transformStyles(barStyles), barStyles),
    wrapper: createJSProps(transformStyles(wrapperStyles), wrapperStyles),
  }
}
