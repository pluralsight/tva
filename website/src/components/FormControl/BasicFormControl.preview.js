import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicFormControlPreview() {
  return (
    <CodeBlock>{`const { control, fieldOptions } = getFormControlProps()
const {value, ...labelProps} = getFormLabelProps({ htmlFor: 'email', value: 'Email address' })

<div {...control}>
    <label {...labelProps}>{value}</label>
</div>`}</CodeBlock>
  )
}

export function BasicFormControlFullPreview() {
  return (
    <CodeBlock>{`import { getFormControlProps, getFormLabelProps } from '@pluralsight/headless-styles';

export default function EmailField(props) {
  const { control, fieldOptions } = getFormControlProps(props)
  const {value, ...labelProps} = getFormLabelProps({ htmlFor: props.id, value: 'Email address' })

  return (
    <div {...control}>
      <label {...labelProps}>{value}</label>
    </div>
  );
}`}</CodeBlock>
  )
}
