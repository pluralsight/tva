import { createClassProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  iconSizeMap,
} from './shared'
import type { AvatarOptions } from './types'
import styles from './avatarCSS.module.css'

const AVATAR = 'ps-avatar'

export function getAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { kindClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.kind,
    defaultOptions.size
  )

  return {
    avatar: {
      'aria-label': defaultOptions.ariaLabel,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR} baseAvatar ${kindClass} ${sizeClass}`,
        defaultClass: `${AVATAR} ${styles[kindClass]} ${styles[sizeClass]}`,
      }),
    },
    image: {
      'aria-hidden': true,
    },
    iconOptions: {
      ariaHidden: true,
      customSize: iconSizeMap[defaultOptions.size],
    },
  }
}
