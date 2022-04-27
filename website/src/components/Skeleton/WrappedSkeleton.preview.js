import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function WrappedSkeletonPreview() {
  return (
    <CodeBlock>{`<div {...getSkeletonProps()}>
  <h2>Some Title</h2>
  <p>A description about the title.</p>
</div>`}</CodeBlock>
  )
}

export function WrappedSkeletonFullPreview() {
  return (
    <CodeBlock>{`import { getSkeletonProps } from '@pluralsight/headless-styles';

export default function CardSkeleton() {
  return (
    <div {...getSkeletonProps()}>
      <h2>Some Title</h2>
      <p>A description about the title.</p>
    </div>
  );
}`}</CodeBlock>
  )
}
