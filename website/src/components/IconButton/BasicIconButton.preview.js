import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicIconButtonPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Toggle menu',
  //highlight-next-line
  kind: 'weak'
})

<button {...button}>
  <MenuIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function BasicIconButtonFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'

export default function MenuButton(props) {
  const { button, iconOptions } = getIconButtonProps({
    ariaLabel: props.label,
    //highlight-next-line
    kind: props.kind,
  })

  return (
    <button {...button} onClick={props.onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
