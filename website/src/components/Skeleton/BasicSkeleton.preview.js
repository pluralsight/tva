import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicSkeletonPreview() {
  return (
    <CodeBlock>{`<div {...getSkeletonProps({ kind: 'text' })} />
<div {...getSkeletonProps({ kind: 'text' })} />
<div {...getSkeletonProps({ kind: 'text' })} />`}</CodeBlock>
  )
}

export function BasicSkeletonFullPreview() {
  return (
    <CodeBlock>{`import { getSkeletonProps } from '@pluralsight/headless-styles';

const textFallbackProps = getSkeletonProps({ kind: 'text' })

export default function ParagraphSkeleton() {
  return (
    <div>
      <div {...textFallbackProps} />
      <div {...textFallbackProps} />
      <div {...textFallbackProps} />
    </div>
  );
}`}</CodeBlock>
  )
}
