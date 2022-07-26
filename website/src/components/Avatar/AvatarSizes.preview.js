import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function AvatarSizesPreview() {
  return (
    <CodeBlock>{`const { avatar } = getAvatarProps({
  ariaLabel: 'extra large avatar',
  size: 'xl'
})

<span {...avatar}>xl</span>`}</CodeBlock>
  )
}

export function AvatarSizesFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const { avatar } = getAvatarProps({
    ariaLabel: props.ariaLabel
    kind: props.kind,
    // highlight-next-line
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
