import { createClassProp } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  iconSizeMap,
} from './shared'
import type { TagOptions } from './types'
import styles from './tagCSS.module.css'

export function getTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kindClass, sizeClass } = createTagSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )

  return {
    ...createClassProp(defaultOptions.tech, {
      defaultClass: `ps-tag ${styles[kindClass]} ${styles[sizeClass]}`,
      svelteClass: `baseTag ${kindClass} ${sizeClass}`,
    }),
  }
}

export function getTagWithIconProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)

  return {
    tag: getTagProps(defaultOptions),
    iconOptions: {
      size: iconSizeMap[defaultOptions.size],
    },
  }
}
