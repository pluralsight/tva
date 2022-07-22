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

function BasicTag() {
  return (
    <Container>
      <Tag href="#tag">default</Tag>
      <Tag href="#tag" kind="weak">
        weak
      </Tag>
      <Tag href="#tag" kind="strong">
        strong
      </Tag>
    </Container>
  )
}

export default BasicTag
