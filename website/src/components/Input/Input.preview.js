import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const inputPreview = (
  <CodeBlock>{`import {
    getErrorMessageProps,
    getFormControlProps,
    getFormLabelProps,
    getInputProps
} from '@pluralsight/headless-styles';

export default function BasicInput(props) {
const { id, onChange, ...inputOptions } = props
const { fieldOptions } = getFormControlProps(inputOptions)
const { value, ...labelProps } = getFormLabelProps({
  ...fieldOptions,
  value: props.label,
})
const inputProps = getInputProps({
  ...fieldOptions,
  id,
  name: props.name,
  placeholder: props.placeholder,
  size: props.size,
  value: props.value
})
const error = getErrorMessageProps({
  ...fieldOptions,
  id,
  message: props.errorMessage
})

return (
  <div>
    <label {...labelProps}>{value}</label>
    <input {...inputProps} onChange={props.onChange} />
    {fieldOptions.invalid && (
      <div {...error.container}>
        <p {...error.message}>{error.message.value}</p>
      </div>
    )}
  </div>
);
}`}</CodeBlock>
)

export default inputPreview
