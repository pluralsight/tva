import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarProps,
} from './shared'
import type { AvatarOptions } from './types'
import styles from './generated/avatarCSS.module'

type StyleKey = keyof typeof styles

export function getJSAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { kindClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )
  const props = createAvatarProps(defaultOptions)

  const avatarStyles = {
    ...styles.baseAvatar,
    ...styles[kindClass as StyleKey],
    ...styles[sizeClass as StyleKey],
  }

  const imageStyles = {
    ...styles.avatarImage,
  }

  return {
    avatar: {
      a11yProps: props.avatar,
      ...createJSProps(transformStyles(avatarStyles), avatarStyles),
    },
    image: {
      a11yProps: props.image,
      ...createJSProps(transformStyles(imageStyles), imageStyles),
    },
    iconOptions: props.iconOptions,
  }
}
