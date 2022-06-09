import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `<div
  style={{
    color: 'var(--ps-danger-text)',
    backgroundColor: 'var(--ps-danger-background-weak)',
  }}
>
  <WarningIcon {...getIconProps} />
  &nbsp; This is a warning!
</div>`

export function IconColorPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function IconColorFullPreview() {
  return (
    <CodeBlock>{`import { WarningIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

function Warning(props) {
  return (
    <div
      style={{
        color: 'var(--ps-danger-text)',
        backgroundColor: 'var(--ps-danger-background-weak)',
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        borderRadius: '3px',
        width: '100%',
      }}
    >
      <WarningIcon {...getIconProps} />
      &nbsp; {props.children}
    </div>
  )
}`}</CodeBlock>
  )
}
