import { createClassProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarProps,
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
  const props = createAvatarProps(defaultOptions)

  return {
    ...props,
    avatar: {
      ...props.avatar,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR} baseAvatar ${kindClass} ${sizeClass}`,
        defaultClass: `${AVATAR} ${styles[kindClass]} ${styles[sizeClass]}`,
      }),
    },
    image: {
      ...props.image,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR}-image avatarImage`,
        defaultClass: `${AVATAR}-image ${styles.avatarImage}`,
      }),
    },
  }
}
