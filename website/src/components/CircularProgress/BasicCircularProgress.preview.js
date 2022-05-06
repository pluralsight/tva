import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicCircularProgressPreview() {
  return (
    <CodeBlock>{`const progressProps = getCircularProgressProps({ now: 50 })

<div {...progressProps.containerProps}>
  <svg {...progressProps.svgBoxProps}>
    <circle {...progressProps.baseCircleProps} />
    <circle {...progressProps.nowCircleProps} />
  </svg>
</div>`}</CodeBlock>
  )
}

export function BasicCircularProgressFullPreview() {
  return (
    <CodeBlock>{`import { getCircularProgressProps } from '@pluralsight/headless-styles';

export default function CircularProgress(props) {
  const progressProps = getCircularProgressProps(props)

  return (
    <div {...progressProps.containerProps}>
      <svg {...progressProps.svgBoxProps}>
        <circle {...progressProps.baseCircleProps} />
        <circle {...progressProps.nowCircleProps} />
      </svg>
    </div>
  );
}`}</CodeBlock>
  )
}
