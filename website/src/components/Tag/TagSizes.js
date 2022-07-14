import React from 'react'
import { getTagProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function Tag(props) {
  const tagProps = getTagProps({
    kind: props.kind,
    size: props.size,
  })

  return (
    <a {...tagProps} href={props.href}>
      {props.children}
    </a>
  )
}

function TagSizes() {
  return (
    <Container>
      <Tag size="s">small</Tag>
      <Tag size="m">medium</Tag>
    </Container>
  )
}

export default TagSizes
