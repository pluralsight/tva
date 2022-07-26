import React from 'react'
import { getAvatarProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function Avatar(props) {
  const { avatar } = getAvatarProps({
    ariaLabel: props.label,
    kind: props.kind,
    size: props.size,
  })

  return <span {...avatar}>{props.size}</span>
}

function AvatarSizes() {
  return (
    <Container>
      <Avatar size="xs" />
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
      <Avatar size="xl" />
    </Container>
  )
}

export default AvatarSizes
