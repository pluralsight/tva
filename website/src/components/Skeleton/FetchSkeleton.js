import React from 'react'
import { getSkeletonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const circleSkeletonProps = getSkeletonProps({ kind: 'circle' })
const contentSkeletonProps = getSkeletonProps({ kind: 'content' })
const textSkeletonProps = getSkeletonProps({ kind: 'text' })

export default function WrappedSkeleton() {
  return (
    <Container>
      <div style={{ display: 'flex', width: '100%' }}>
        <div {...circleSkeletonProps} />
        <div style={{ paddingInlineStart: '1rem', width: '50%' }}>
          <div {...textSkeletonProps} />
          <div {...textSkeletonProps} style={{ width: '6rem' }} />
          <div {...contentSkeletonProps}>
            <h2 style={{ color: 'transparent' }}>Some Title</h2>
            <p>A description of the content.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
