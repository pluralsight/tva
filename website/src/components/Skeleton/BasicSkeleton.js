import React from 'react'
import { getSkeletonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const textSkeletonProps = getSkeletonProps({ kind: 'text' })

export default function BasicSkeleton() {
  return (
    <Container>
      <div style={{ width: '100%' }}>
        <div {...textSkeletonProps} />
        <div {...textSkeletonProps} />
        <div {...textSkeletonProps} />
      </div>
    </Container>
  )
}
