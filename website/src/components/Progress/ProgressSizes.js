import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const xsProgress = getProgressProps({ size: 'xs', now: 50 })
const insetProgress = getProgressProps({
  now: 60,
})

export default function ProgressSizes() {
  return (
    <Container column>
      <div {...xsProgress.wrapper} style={{ marginBottom: '1rem' }}>
        <div {...xsProgress.bar} />
      </div>
      <div {...insetProgress.wrapper}>
        <div {...insetProgress.bar} />
      </div>
    </Container>
  )
}
