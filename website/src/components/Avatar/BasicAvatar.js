import React from 'react'
import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconAvatar(props) {
  const { avatar, iconOptions } = getAvatarProps({
    ariaLabel: props.label,
    kind: props.kind,
    size: props.size,
  })

  return (
    <span {...avatar}>
      <PersonIcon {...getIconProps(iconOptions)} />
    </span>
  )
}

function Avatar(props) {
  const { avatar } = getAvatarProps({
    ariaLabel: props.label,
    kind: props.kind,
    size: props.size,
  })

  return <span {...avatar}>{props.children}</span>
}

function BasicAvatar() {
  return (
    <Container>
      <Avatar kind="neutral" label="neutral avatar">
        NA
      </Avatar>
      <IconAvatar kind="neutral" label="neutral icon avatar" />
      <Avatar kind="strong" label="strong avatar">
        SA
      </Avatar>
      <IconAvatar kind="strong" label="strong icon avatar" />
    </Container>
  )
}

export default BasicAvatar
