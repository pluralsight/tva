import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function AvatarContentPreview() {
  return (
    <CodeBlock>{`const { avatar, image, iconOptions } = getAvatarProps({
  ariaLabel: "Jane Doe's Avatar"
})

<span {...avatar}><img {...image} src={profileSrc} alt="Jane Doe" /></span>
<span {...avatar}>WA</span>
<span {...avatar}><ProfileIcon {...getIconProps(iconOptions)} /></span>
`}</CodeBlock>
  )
}

export function AvatarContentFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'

function FallbackAvatar(props) {
  const { avatar, iconOptions } = getAvatarProps(props)

  return (
    <span {...avatar}><PersonIcon {...iconProps} /></span>
  )
}

function InitialAvatar({ initials, ...avatarProps }) {
  const { avatar } = getAvatarProps(avatarProps)

  return (
    <span {...avatar}>{initials}</span>
  )
}

function ImageAvatar({ src, name, ...avatarProps }) {
  const { avatar, image } = getAvatarProps(avatarProps)

  return (
    <span {...avatar}><img src={src} alt={name} {...image} /></span>
  )
}

export default function Avatar(props) {
  if (props.src) {
    return <ImageAvatar {...props} />
  } else if (props.initials) {
    return <InitialAvatar {...props} />
  }

  return <FallbackAvatar {...props} />
}`}</CodeBlock>
  )
}
