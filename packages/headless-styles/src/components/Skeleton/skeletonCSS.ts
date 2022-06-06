import { createClassProp } from '../../utils/helpers'
import { getDefaultSkeletonOptions } from './shared'
import styles from './skeletonCSS.module.css'
import type { SkeletonOptions } from './types'

export function getSkeletonProps(options?: SkeletonOptions) {
  const { kind, tech } = getDefaultSkeletonOptions(options)

  return {
    ...createClassProp(
      {
        svelteClass: `ps-skeleton base ${kind}`,
        defaultClass: `ps-skeleton ${styles[kind]}`,
      },
      tech
    ),
  }
}
