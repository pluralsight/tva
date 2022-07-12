import { getDefaultTagOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'


export function getJSTagProps(options?: TagOptions) {
  const { kind, size } = getDefaultTagOptions(options)
  const sizeKey = `${size}Tag` as keyof typeof styles
  const kindKey = `${kind}Tag` as keyof typeof styles
  const JsStyles = {
    ...styles.baseTag,
    ...styles[kindKey],
    ...styles[sizeKey],
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
  }
}
