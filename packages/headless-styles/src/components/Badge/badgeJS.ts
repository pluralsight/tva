import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultBadgeOptions } from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

export const muiLabelOverride = `
  .MuiChip-label {
    padding-left: initial;
    padding-right: initial;
  }
`

export function getJSBadgeProps(options?: BadgeOptions) {
  const { kind } = getDefaultBadgeOptions(options)
  const jsStyles = {
    ...styles.psBadgeBase,
    ...styles[kind as keyof typeof styles],
  }

  return createJSProps(transformStyles(jsStyles), jsStyles)
}
