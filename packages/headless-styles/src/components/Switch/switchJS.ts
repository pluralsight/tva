import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions, Size } from './types'

const TRACK_HEIGHT = '-PsTrackHeight'
const TRACK_WIDTH = '-PsTrackWidth'
const THUMB_SIZE = '-PsThumbSize'

type TrackKey = '-PsTrackHeight' | '-PsTrackWidth' | '-PsThumbSize'

function isSizeS(size: Size, key: TrackKey) {
  if (size === 's') {
    return styles.sTrack[key]
  }

  return styles.track[key]
}

const sTrackHeight = isSizeS('s', TRACK_HEIGHT)
const sTrackWidth = isSizeS('s', TRACK_WIDTH)
const mTrackHeight = isSizeS('m', TRACK_HEIGHT)
const mTrackWidth = isSizeS('m', TRACK_WIDTH)
const baseTrackStyles = {
  ...styles.track,
  height: mTrackHeight,
  width: mTrackWidth,
}

// Public

export const ChakraSwitch = {
  baseStyle: {
    container: styles.container,
    thumb: {
      ...styles.thumb,
      height: isSizeS('m', THUMB_SIZE),
      width: isSizeS('m', THUMB_SIZE),
      _checked: {
        ...styles.thumb_data_checked__true,
        transform: `translateX(calc(${mTrackWidth} - ${mTrackHeight}))`,
      },
      _disabled: {
        ...styles.thumb_data_disabled__true,
      },
    },
    track: {
      ...baseTrackStyles,
      _checked: {
        ...styles.track_data_checked__true,
      },
      _disabled: {
        ...styles.track_data_disabled__true,
      },
      _invalid: {
        ...styles.track_data_invalid__true,
      },
    },
  },
  parts: ['container', 'track', 'thumb'],
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: {
      thumb: {
        height: isSizeS('s', THUMB_SIZE),
        width: isSizeS('s', THUMB_SIZE),
        _checked: {
          ...styles.thumb_data_checked__true,
          transform: `translateX(calc(${sTrackWidth} - ${sTrackHeight}))`,
        },
      },
      track: {
        ...styles.sTrack,
        height: sTrackHeight,
        width: sTrackWidth,
      },
    },
    m: {
      track: baseTrackStyles,
    },
  },
}

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const thumbSize = isSizeS(size, THUMB_SIZE)
  const trackHeight = isSizeS(size, TRACK_HEIGHT)
  const trackWidth = isSizeS(size, TRACK_WIDTH)
  const trackStyles = {
    ...styles.track,
    ...styles[`${size}Track`],
    height: trackHeight,
    width: trackWidth,
    '&[data-checked="true"]': {
      ...styles.track_data_checked__true,
    },
    '&[data-invalid="true"]': {
      ...styles.track_data_invalid__true,
    },
  }
  const thumbStyles = {
    ...styles.thumb,
    height: thumbSize,
    width: thumbSize,
    '&[data-checked="true"]': {
      transform: `translateX(calc(${trackWidth} - ${trackHeight}))`,
    },
    '&[data-disabled="true"]': {
      ...styles.thumb_data_disabled__true,
    },
  }

  return {
    input: {
      a11yProps: {
        ...inputProps,
      },
      ...createJSProps(transformStyles(styles.input), styles.input),
    },
    switchContainer: createJSProps(
      transformStyles(styles.container),
      styles.container
    ),
    switchTrack: {
      a11yProps: {
        ...hidden,
        ...dataProps,
      },
      ...createJSProps(transformStyles(trackStyles), trackStyles),
    },
    switchThumb: {
      a11yProps: {
        ...dataProps,
      },
      ...createJSProps(transformStyles(thumbStyles), thumbStyles),
    },
  }
}
