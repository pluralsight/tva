import React from 'react'
import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'
import Container from '../Container/Container'
import { weirdAl } from './avatar.image'

function FallbackAvatar(props) {
  const { avatar, iconOptions } = getAvatarProps(props)

  return (
    <span {...avatar}>
      <PersonIcon {...getIconProps(iconOptions)} />
    </span>
  )
}

function InitialAvatar({ initials, ...avatarProps }) {
  const { avatar } = getAvatarProps(avatarProps)

  return <span {...avatar}>{initials}</span>
}

function ImageAvatar({ src, name, ...avatarProps }) {
  const { avatar, image } = getAvatarProps(avatarProps)

  return (
    <span {...avatar}>
      <img src={src} alt={name} {...image} />
    </span>
  )
}

function Avatar(props) {
  if (props.src) {
    return <ImageAvatar {...props} />
  } else if (props.initials) {
    return <InitialAvatar {...props} />
  }

  return <FallbackAvatar {...props} />
}

function AvatarContent() {
  return (
    <Container>
      <Avatar
        name="Weird Al Yankovic"
        src={weirdAl}
        ariaLabel="Weird Al's Profile"
      />
      <Avatar
        name="Weird Al Yankovic"
        initials="WA"
        ariaLabel="Weird Al's Profile"
      />
      <Avatar ariaLabel="Anonymous Profile" />
    </Container>
  )
}

export default AvatarContent
