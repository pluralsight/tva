import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ButtonSizesPreview() {
  return (
    <CodeBlock>{`<button {...getButtonProps()}>default</button>
<button {...getButtonProps({ size: 'xs' })}>xtra-small</button>
<button {...getButtonProps({ size: 's' })}>small</button>
<button {...getButtonProps({ size: 'm' })}>medium</button>
<button {...getButtonProps({ size: 'l' })}>large</button>`}</CodeBlock>
  )
}

export function ButtonSizesFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps } from '@pluralsight/headless-styles';

export default function ButtonsSizes() {
  return (
    <div>
      <button {...getButtonProps()}>default</button>
      <button {...getButtonProps({ size: 'xs' })}>xtra-small</button>
      <button {...getButtonProps({ size: 's' })}>small</button>
      <button {...getButtonProps({ size: 'm' })}>medium</button>
      <button {...getButtonProps({ size: 'l' })}>large</button>
    </div>
  );
}`}</CodeBlock>
  )
}
