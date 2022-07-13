import { createClassProp } from '../../utils/helpers'
import { createTagSelectorClasses, getDefaultTagOptions } from './shared'
import type { TagOptions } from './types'
import styles from './tagCSS.module.css'

export function getTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kind, size } = defaultOptions
  const { kindClass, sizeClass } = createTagSelectorClasses(kind, size)

  return {
    ...createClassProp(defaultOptions.tech, {
      defaultClass: `ps-tag ${styles[kindClass]} ${styles[sizeClass]}`,
      svelteClass: `baseTag ${kindClass} ${sizeClass}`,
    }),
  }
}
