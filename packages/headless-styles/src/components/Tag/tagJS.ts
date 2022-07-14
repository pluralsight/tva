import { transformStyles } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  iconSizeMap,
} from './shared'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'

type StylesKey = keyof typeof styles

export function getJSTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kindClass, sizeClass } = createTagSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )
  const JsStyles = {
    ...styles.baseTag,
    ...styles[kindClass as StylesKey],
    ...styles[sizeClass as StylesKey],
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
  }
}

export function getJSTagWithIconProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)

  return {
    tag: getJSTagProps(defaultOptions),
    iconOptions: {
      size: iconSizeMap[defaultOptions.size],
    },
  }
}
