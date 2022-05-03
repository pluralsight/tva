import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicProgressPreview() {
  return (
    <CodeBlock>{`const {classes, ...a11yProps} = getProgressProps({ now: 50 })

<div {...classes.wrapper}>
  <div {...a11yProps} {...classes.bar} />
</div>`}</CodeBlock>
  )
}

export function BasicProgressFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const {classes, ...a11yProps} = getProgressProps(props)

  return (
    <div {...classes.wrapper}>
      <div {...a11yProps} {...classes.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
