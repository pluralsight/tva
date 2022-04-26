import { createSvelteObj } from '../../utils/helpers'
import { getDefaultSkeletonOptions } from './shared'
import styles from './skeletonCSS.module.css'
import type { SkeletonOptions } from './types'

export function getSkeletonProps(options?: SkeletonOptions) {
  const { kind, tech } = getDefaultSkeletonOptions(options)

  if (tech === 'svelte') {
    return createSvelteObj(`ps-skeleton base ${kind}`)
  }

  return {
    className: `ps-skeleton ${styles[kind]}`,
  }
}
