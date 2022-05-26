import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicSwitchPreview() {
  return (
    <CodeBlock>{`const switchProps = getSwitchProps()

<label {...switchProps.switchContainer}>
  <input {...switchProps.input} onChange={handleCheck} />
  <span {...switchProps.switchTrack}>
    <span {...switchProps.switchThumb} />
  </span>
</label>`}</CodeBlock>
  )
}

export function BasicSwitchFullPreview() {
  return (
    <CodeBlock>{`import { getSwitchProps } from '@pluralsight/headless-styles';

export default function BasicSwitch(props) {
  const switchProps = getSwitchProps(props)

  return (
    <label {...switchProps.switchContainer}>
      <input {...switchProps.input} onChange={props.onClick} />
      <span {...switchProps.switchTrack}>
        <span {...switchProps.switchThumb} />
      </span>
    </label>
  );
}`}</CodeBlock>
  )
}
