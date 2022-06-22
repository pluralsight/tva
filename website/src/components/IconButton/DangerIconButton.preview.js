import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function DangerIconButtonPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getDangerIconButtonProps({
  ariaLabel: 'Delete',
})

<button {...button}>
  <DeleteIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function DangerIconButtonFullPreview() {
  return (
    <CodeBlock>{`import { getDangerIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { DeleteIcon } from '@pluralsight/icons'

export default function DeleteButton(props) {
  const { button, iconOptions } = getDangerIconButtonProps({
    ariaLabel: props.label,
    kind: props.kind,
    size: props.size,
    variant: props.variant,
  })

  return (
    <button {...button} onClick={props.onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
