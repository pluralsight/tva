import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicButtonPreview() {
  return (
    <CodeBlock>{`<button {...getButtonProps()}>default</button>
<button {...getButtonProps({ kind: 'textWeak' })}>textWeak</button>
<button {...getButtonProps({ kind: 'weak' })}>weak</button>
<button {...getButtonProps({ kind: 'medium' })}>medium</button>
<button {...getButtonProps({ kind: 'strong' })}>strong</button>`}</CodeBlock>
  )
}

export function BasicButtonFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps } from '@pluralsight/headless-styles';

export default function BasicButtons() {
  return (
    <div>
      <button {...getButtonProps()}>default</button>
      <button {...getButtonProps({ kind: 'textWeak' })}>textWeak</button>
      <button {...getButtonProps({ kind: 'weak' })}>weak</button>
      <button {...getButtonProps({ kind: 'medium' })}>medium</button>
      <button {...getButtonProps({ kind: 'strong' })}>strong</button>
    </div>
  );
}`}</CodeBlock>
  )
}
