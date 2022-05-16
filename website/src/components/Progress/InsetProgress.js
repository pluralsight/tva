import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const inset = getProgressProps({
  kind: 'inset',
  now: 60,
})

export default function InsetProgress() {
  return (
    <Container column>
      <div {...inset.wrapper}>
        <div {...inset.bar} />
      </div>
    </Container>
  )
}
