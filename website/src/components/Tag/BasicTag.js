import React from 'react'
import { getTagProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function BasicTag(props) {
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

function BasicButton() {
  return (
    <Container>
      <BasicTag href="#tag">default</BasicTag>
      <BasicTag href="#tag" kind="weak">
        weak
      </BasicTag>
      <BasicTag href="#tag" kind="strong">
        strong
      </BasicTag>
    </Container>
  )
}

export default BasicButton
