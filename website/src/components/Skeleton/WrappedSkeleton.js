import React from 'react'
import { getSkeletonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const contentSkeletonProps = getSkeletonProps({ kind: 'content' })

export default function WrappedSkeleton() {
  return (
    <Container>
      <div style={{ width: '100%' }}>
        <div {...contentSkeletonProps}>
          <h2 style={{ color: 'transparent' }}>Some Title</h2>
          <p>A description of the content.</p>
        </div>
      </div>
    </Container>
  )
}
