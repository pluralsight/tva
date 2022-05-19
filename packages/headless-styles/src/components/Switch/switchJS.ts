import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions, Size } from './types'

// export const ChakraSwitch = {
//   baseStyle: styles.psBadgeBase,
//   defaultProps: {
//     variant: 'strong',
//   },
//   variants: {
//     weak: styles.weak,
//     medium: styles.medium,
//     strong: styles.strong,
//   },
// }

type TrackKey = '-PsTrackHeight' | '-PsTrackWidth' | '-PsThumbSize'

function isSizeS(size: Size, key: TrackKey) {
  if (size === 's') {
    return styles.sTrack[key]
  }

  return styles.track[key]
}

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { htmlFor, size } = defaultOptions
  const { inputProps, dataProps, hidden, role } = getA11yProps(defaultOptions)
  const thumbSize = isSizeS(size, '-PsThumbSize')
  const trackHeight = isSizeS(size, '-PsTrackHeight')
  const trackWidth = isSizeS(size, '-PsTrackWidth')
  const labelStyles = {
    ...styles.label,
    ...styles[`${size}Label`],
  }
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
    label: {
      a11yProps: { htmlFor },
      ...createJSProps(transformStyles(labelStyles), labelStyles),
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
