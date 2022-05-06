import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IndeterminateCircularProgressPreview() {
  return (
    <CodeBlock>{`const loadingProps = getCircularProgressProps({ kind: 'indeterminate'})

<div {...loadingProps.containerProps}>
  <svg {...loadingProps.svgBoxProps}>
    <circle {...loadingProps.baseCircleProps} />
    <circle {...loadingProps.nowCircleProps} />
  </svg>
</div>`}</CodeBlock>
  )
}

export function IndeterminateCircularProgressFullPreview() {
  return (
    <CodeBlock>{`import { getCircularProgressProps } from '@pluralsight/headless-styles';

export default function LoadingProgress(props) {
  const loadingProps = getCircularProgressProps({...props, kind: 'indeterminate'})

  return (
    <div {...loadingProps.containerProps}>
      <svg {...loadingProps.svgBoxProps}>
        <circle {...loadingProps.baseCircleProps} />
        <circle {...loadingProps.nowCircleProps} />
      </svg>
    </div>
  );
}`}</CodeBlock>
  )
}
