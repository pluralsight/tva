import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ButtonWithIconPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getButtonWithIconProps()

<button {...button}>
  <PencilIcon {...getIconProps(iconOptions)} />
  Edit
</button>`}</CodeBlock>
  )
}

export function ButtonWithIconFullPreview() {
  return (
    <CodeBlock>{`import { getButtonWithIconProps, getIconProps } from '@pluralsight/headless-styles'
import { PencilIcon } from '@pluralsight/icons'

export default function EditButton(props) {
  const { button, iconOptions } = getButtonWithIconProps()

  return (
    <button {...getButtonProps()}>
      <PencilIcon {...getIconProps(iconOptions)} />
      {props.label}
    </button>
  );
}`}</CodeBlock>
  )
}
