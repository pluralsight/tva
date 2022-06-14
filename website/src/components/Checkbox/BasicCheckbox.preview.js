import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicCheckboxPreview() {
  return (
    <CodeBlock>{`const checkbox = getCheckboxProps()
const { value, ...labelProps } = getFormLabelProps()
const icon = getIconProps(checkbox.iconOptions)

<label {...checkbox.checkboxContainer}>
  <input {...checkbox.input} onChange={props.onClick} />
  <span {...checkbox.checkboxControl}>
    {checkbox.input.checked && <CheckIcon {...icon} />}
  </span>
  <span {...labelProps}>{value}</span>
</label>`}</CodeBlock>
  )
}

export function BasicCheckboxFullPreview() {
  return (
    <CodeBlock>{`import {
  getCheckboxProps,
  getFormControlProps,
  getIconProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { CheckIcon } from '@pluralsight/icons'

export default function Checkbox(props) {
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })
  const icon = getIconProps(checkbox.iconOptions)

  return (
    <label {...checkbox.checkboxContainer}>
      <input {...checkbox.input} onChange={props.onClick} />
      <span {...checkbox.checkboxControl}>
        {checkbox.input.checked && <CheckIcon {...icon} />}
      </span>
      <span {...labelProps}>{value}</span>
    </label>
  )
}`}</CodeBlock>
  )
}
