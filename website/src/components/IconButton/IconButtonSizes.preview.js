import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconButtonSizesPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Go to next page',
  //highlight-next-line
  size: 'l'
})

<button {...button}>
  <ChevronRightIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function IconButtonSizesFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'

export default function NextButton(props) {
  const { button, iconOptions } = getIconButtonProps({
    ariaLabel: props.label,
    kind: props.kind,
    //highlight-next-line
    size: props.size,
  })

  return (
    <button {...button}>
      <ChevronRightIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
