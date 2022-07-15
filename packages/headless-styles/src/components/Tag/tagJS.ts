import { transformStyles } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  getTagIconOptions,
} from './shared'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'

type StylesKey = keyof typeof styles
type KindKey = 'weakTag' | 'strongTag'

export function getJSTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { kindClass, sizeClass } = createTagSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )
  const kindStyles = styles[kindClass as KindKey]
  const JsStyles = {
    ...styles.baseTag,
    ...kindStyles,
    ...styles[sizeClass as StylesKey],
    '&:active': {
      ...styles.baseTag['&:active'],
      ...kindStyles['&:active'],
    },
    '&:hover': {
      ...styles.baseTag['&:hover'],
      ...kindStyles['&:hover'],
    },
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
    iconOptions: getTagIconOptions(defaultOptions.size, defaultOptions.tech),
  }
}
