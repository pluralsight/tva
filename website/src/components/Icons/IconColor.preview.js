import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `<button
  style={{
    backgroundColor: 'var(--ps-background-weak)',
    color: 'var(--ps-text)',
  }}
>
  <PlaceholderIcon {...getIconProps()} />
  Icon matches font color
</button>`

export function IconColorPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function IconColorFullPreview() {
  return (
    <CodeBlock>{`import { PlaceholderIcon } from '@pluralsight/icons'
import { getIconProps, getButtonWithIconProps } from '@pluralsight/headless-styles'

const { button, iconOptions } = getButtonWithIconProps({ kind: 'strong' })
const iconProps = getIconProps(iconOptions)

function DemoButton() {
  return (
    <button {...button}>
      <PlaceholderIcon {...iconProps} />
      Icon matches font color
    </button>
  )
}`}</CodeBlock>
  )
}
