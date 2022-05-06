import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function CircularProgressSizesPreview() {
  return (
    <CodeBlock>{`const xsProgressProps = getCircularProgressProps({
  now: 32,
  size: 'xs'
})
const progressProps = getCircularProgressProps({ now: 50 })

<div {...xsProgressProps.containerProps}>
  <svg {...xsProgressProps.svgBoxProps}>
    <circle {...xsProgressProps.baseCircleProps} />
    <circle {...xsProgressProps.nowCircleProps} />
  </svg>
</div>
<div {...progressProps.containerProps}>
  <svg {...progressProps.svgBoxProps}>
    <circle {...progressProps.baseCircleProps} />
    <circle {...progressProps.nowCircleProps} />
  </svg>
</div>`}</CodeBlock>
  )
}

export function CircularProgressSizesFullPreview() {
  return (
    <CodeBlock>{`import { getCircularProgressProps } from '@pluralsight/headless-styles';

export default function XSCircularProgress(props) {
  const progressProps = getCircularProgressProps({...props, size: 'xs'})

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
