import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicProgressPreview() {
  return (
    <CodeBlock>{`const progress = getProgressProps({ now: 50 })

<div {...progress.wrapper}>
  <div {...progress.bar} />
</div>`}</CodeBlock>
  )
}

export function BasicProgressFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const progress = getProgressProps(props)

  return (
    <div {...progress.wrapper}>
      <div {...progress.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
