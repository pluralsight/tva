import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ProgressSizesPreview() {
  return (
    <CodeBlock>{`const {classes, ...a11yProps} = getProgressProps({ size: 'xs', now: 50 })
const {classes: sClases, ...sA11yProps} = getProgressProps({ size: 's', now: 60 })

<div {...classes.wrapper}>
  <div {...a11yProps} {...classes.bar} />
</div>
<div {...sClasses.wrapper}>
  <div {...sA11yProps} {...sClasses.bar} />
</div>`}</CodeBlock>
  )
}

export function ProgressSizesFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const {classes, ...a11yProps} = getProgressProps({...props, size: 'xs'})

  return (
    <div {...classes.wrapper}>
      <div {...a11yProps} {...classes.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
