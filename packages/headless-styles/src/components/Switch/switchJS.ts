import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions } from './types'

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

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { htmlFor, size } = defaultOptions
  const { inputProps, dataProps, hidden, role } = getA11yProps(defaultOptions)
  const jsStyles = {
    input: {
      a11Props: inputProps,
      ...styles.input,
    },
    label: {
      a11yProps: { htmlFor },
      ...styles.label,
      ...styles[`${size}Label`],
    },
    switchContainer: {
      ...styles.container,
    },
    switchTrack: {
      a11yProps: {
        ...hidden,
        ...dataProps,
      },
      ...styles.track,
      ...styles[`${size}Track`],
    },
    switchThumb: {
      a11yProps: {
        ...dataProps,
      },
      ...styles.thumb,
    },
    wrapper: {
      a11yProps: { ...role },
      ...styles.base,
    },
  }

  return createJSProps(transformStyles(jsStyles), jsStyles)
}
