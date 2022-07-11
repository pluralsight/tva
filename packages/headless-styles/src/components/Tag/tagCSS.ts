import { createClassProp } from '../../utils/helpers'
import { getDefaultTagOptions } from './shared'
import type { TagOptions } from './types'
import styles from './tagCSS.module.css'

export function getTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kind, size } = defaultOptions
  const kindClass = `${kind}Tag`
  const sizeClass = `${size}Tag`

  return {
    ...createClassProp(defaultOptions.tech, {
      defaultClass: `ps-tag ${styles[kindClass]} ${styles[sizeClass]}`,
      svelteClass: `baseTag ${kindClass} ${sizeClass}`,
    }),
  }
}
