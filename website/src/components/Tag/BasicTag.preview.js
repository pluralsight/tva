import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTagPreview() {
  return (
    <CodeBlock>{`<a {...getTagProps()} href="#tag">
  Tag
</a>`}</CodeBlock>
  )
}

export function BasicTagFullPreview() {
  return (
    <CodeBlock>{`import { getTagProps } from '@pluralsight/headless-styles'

export default function Tag(props) {
  const tagProps = getTagProps({
    // highlight-next-line
    kind: props.kind,
    size: props.size,
  })

  return (
    <a {...tagProps} href={props.href}>
      {props.children}
    </a>
  )
}`}</CodeBlock>
  )
}
