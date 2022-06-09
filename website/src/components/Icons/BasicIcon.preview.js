import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `<MenuIcon {...getIconProps()} />
<MenuIcon {...getIconProps({ size: 's' })} />
<MenuIcon {...getIconProps({ size: 'm' })} />
<MenuIcon {...getIconProps({ size: 'l' })} />`

export function BasicIconPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function BasicIconFullPreview() {
  return (
    <CodeBlock>{`import { MenuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

export default function PSMenuIcon() {
  return (
    <MenuIcon {...getIconProps()} />
  )
}`}</CodeBlock>
  )
}
