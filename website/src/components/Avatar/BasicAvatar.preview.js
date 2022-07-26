import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicAvatarPreview() {
  return (
    <CodeBlock>{`const { avatar } = getAvatarProps({
  ariaLabel: 'Pluralsight avatar'
  kind: 'strong',
})

<span {...avatar}>PS</span>`}</CodeBlock>
  )
}

export function BasicAvatarFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const { avatar } = getAvatarProps({
    ariaLabel: props.ariaLabel,
    // highlight-next-line
    kind: props.kind,
    size: props.size,
  })

  return (
    <span {...avatar}>
      {props.children}
    </span>
  )
}`}</CodeBlock>
  )
}
