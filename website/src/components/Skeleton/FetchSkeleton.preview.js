import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function FetchSkeletonPreview() {
  return (
    <CodeBlock>{`<div {...getSkeletonProps({ kind: 'circle' })} />
<div {...getSkeletonProps({ kind: 'text' })} />
<div {...getSkeletonProps({ kind: 'text' })} style={{ width: '6rem' }} />
<div {...getSkeletonProps({ kind: 'content' })}>
  <h2>Some Title</h2>
  <p>A description about the title.</p>
</div>`}</CodeBlock>
  )
}

export function FetchSkeletonFullPreview() {
  return (
    <CodeBlock>{`import { getSkeletonProps } from '@pluralsight/headless-styles';

const circleSkeletonProps = getSkeletonProps({ kind: 'circle' })
const contentSkeletonProps = getSkeletonProps({ kind: 'content' })
const textSkeletonProps = getSkeletonProps({ kind: 'text' })

export default function CardSkeleton() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div {...circleSkeletonProps} />
      <div style={{ paddingInlineStart: '1rem', width: '50%' }}>
        <div {...textSkeletonProps} />
        <div {...textSkeletonProps} style={{ width: '6rem' }} />
        <div {...contentSkeletonProps}>
          <h2>Some Title</h2>
          <p>A description of the content.</p>
        </div>
      </div>
    </div>
  );
}`}</CodeBlock>
  )
}
