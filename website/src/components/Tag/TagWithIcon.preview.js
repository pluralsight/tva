import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function TagWithIconPreview() {
  return (
    <CodeBlock>{`<a {...tag} href="#tag">
    <PlaceholderIcon {...getIconProps(iconOptions)} />
    Tag
</a>`}</CodeBlock>
  )
}

export function TagWithIconFullPreview() {
  return (
    <CodeBlock>{`import { getTagWithIconProps, getIconProps } from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'

export default function IconTag(props) {
  const {tag, iconOptions} = getTagWithIconProps({
    kind: props.kind,
    size: props.size,
  })

  const iconProps = getIconProps(iconOptions)

  return (
    <a {...tagProps} href={props.href}>
      {!props.after && <PlaceholderIcon {...iconProps} />}

      {props.children}

      {props.after && <PlaceholderIcon {...iconProps} />}
    </a>
  )
}`}</CodeBlock>
  )
}
