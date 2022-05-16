import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function InsetProgressPreview() {
  return (
    <CodeBlock>{`const insetProgress = getProgressProps({ kind: 'inset', now: 50 })

<div {...insetProgress.wrapper}>
  <div {...insetProgress.bar} />
</div>`}</CodeBlock>
  )
}

export function InsetProgressFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const insetProgress = getProgressProps({...props, kind: 'inset'})

  return (
    <div {...insetProgress.wrapper}>
      <div {...insetProgress.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
