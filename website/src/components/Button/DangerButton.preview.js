import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function DangerButtonPreview() {
  return (
    <CodeBlock>{`<button {...getDangerButtonProps()}>default</button>
<button {...getDangerButtonProps({ kind: 'medium' })}>medium</button>
<button {...getDangerButtonProps({ kind: 'strong' })}>strong</button>`}</CodeBlock>
  )
}

export function DangerButtonFullPreview() {
  return (
    <CodeBlock>{`import { getDangerButtonProps } from '@pluralsight/headless-styles';

export default function DangerButtons() {
  return (
    <div>
      <button {...getDangerButtonProps()}>default</button>
      <button {...getDangerButtonProps({ kind: 'medium' })}>medium</button>
      <button {...getDangerButtonProps({ kind: 'strong' })}>strong</button>
    </div>
  );
}`}</CodeBlock>
  )
}
