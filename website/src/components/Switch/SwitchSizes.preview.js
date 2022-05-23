import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function SwitchSizesPreview() {
  return (
    <CodeBlock>{`const switchProps = getSwitchProps({ size: 's' })

<label {...switchProps.switchContainer}>
  <input {...switchProps.input} onClick={handleCheck} />
  <span {...switchProps.switchTrack}>
    <span {...switchProps.switchThumb} />
  </span>
</label>`}</CodeBlock>
  )
}

export function SwitchSizesFullPreview() {
  return (
    <CodeBlock>{`import { getSwitchProps } from '@pluralsight/headless-styles';

export default function SmallSwitch(props) {
  const switchProps = getSwitchProps({...props, size: 's'})

  return (
    <label {...switchProps.switchContainer}>
      <input {...switchProps.input} onClick={props.onClick} />
      <span {...switchProps.switchTrack}>
        <span {...switchProps.switchThumb} />
      </span>
    </label>
  );
}`}</CodeBlock>
  )
}
