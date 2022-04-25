import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicBadgePreview() {
  return (
    <CodeBlock>{`<span {...getBadgeProps()}>Default</span>
<span {...getBadgeProps({ kind: 'strong' })}>Strong</span>
<span {...getBadgeProps({ kind: 'medium' })}>Medium</span>
<span {...getBadgeProps({ kind: 'weak' })}>Weak</span>`}</CodeBlock>
  )
}

export function BasicBadgeFullPreview() {
  return (
    <CodeBlock>{`import { getBadgeProps } from '@pluralsight/headless-styles';

export default function BasicBadges() {
  return (
    <div>
      <span {...getBadgeProps()}>Default</span>
      <span {...getBadgeProps({ kind: 'strong' })}>Strong</span>
      <span {...getBadgeProps({ kind: 'medium' })}>Medium</span>
      <span {...getBadgeProps({ kind: 'weak' })}>Weak</span>
    </div>
  );
}`}</CodeBlock>
  )
}
