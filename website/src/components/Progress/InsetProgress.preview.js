import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function InsetProgressPreview() {
  return (
    <CodeBlock>{`const {classes, ...a11yProps} = getProgressProps({ kind: 'inset', now: 50 })

<div {...classes.wrapper}>
  <div {...a11yProps} {...classes.bar} />
</div>`}</CodeBlock>
  )
}

export function InsetProgressFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const {classes, ...a11yProps} = getProgressProps({...props, kind: 'inset'})

  return (
    <div {...classes.wrapper}>
      <div {...a11yProps} {...classes.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
