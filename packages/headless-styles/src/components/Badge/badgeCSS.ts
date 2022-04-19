import { getDefaultBadgeOptions } from './shared'
import { createSvelteObj } from '../../utils/helpers'
import styles from './badgeCSS.module.css'
import { BadgeOptions } from './types'

export function getBadgeProps(options?: BadgeOptions) {
  const { kind, tech } = getDefaultBadgeOptions(options)

  if (tech === 'svelte') {
    return createSvelteObj(`ps-badge psBadgeBase ${kind}`)
  }

  return {
    className: `ps-badge ${styles[kind]}`,
  }
}
