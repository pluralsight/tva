import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicFormControlPreview() {
  return (
    <CodeBlock>{`const { control, fieldOptions } = getFormControlProps()
const labelProps = getFormLabelProps({ htmlFor: 'email' })

<div {...control}>
    <label {...labelProps}>Email address</label>
</div>`}</CodeBlock>
  )
}

export function BasicFormControlFullPreview() {
  return (
    <CodeBlock>{`import { getFormControlProps, getFormLabelProps } from '@pluralsight/headless-styles';

export default function EmailField(props) {
  const { control, fieldOptions } = getFormControlProps(props)
  const labelProps = getFormLabelProps({ htmlFor: props.id })

  return (
    <div {...control}>
      <label {...labelProps}>Email address</label>
    </div>
  );
}`}</CodeBlock>
  )
}
