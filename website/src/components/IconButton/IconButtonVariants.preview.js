import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconButtonVariantsPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Edit',
  //highlight-next-line
  variant: 'round'
})

<button {...button}>
  <PencilIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function IconButtonVariantsFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { PencilIcon } from '@pluralsight/icons'

function EditButton(props) {
  const { button, iconOptions } = getIconButtonProps({
    ariaLabel: props.label,
    kind: props.kind,
    size: props.size,
    //highlight-next-line
    variant: props.variant,
  })

  return (
    <button {...button}>
      <PencilIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
