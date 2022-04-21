import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultBadgeOptions } from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

export const muiLabelOverride = `
  padding: initial;

  .MuiChip-label {
    padding-left: initial;
    padding-right: initial;
  }
`

export const Badge = {
  baseStyle: styles.psBadgeBase,
  defaultProps: {
    variant: 'strong',
  },
  variants: {
    weak: styles.weak,
    medium: styles.medium,
    strong: styles.strong,
  },
}

export function getJSBadgeProps(options?: BadgeOptions) {
  const { kind } = getDefaultBadgeOptions(options)
  const jsStyles = {
    ...styles.psBadgeBase,
    ...styles[kind as keyof typeof styles],
  }

  return createJSProps(transformStyles(jsStyles), jsStyles)
}
