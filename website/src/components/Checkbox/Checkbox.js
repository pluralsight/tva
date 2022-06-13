import React from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getIconProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { CheckIcon } from '@pluralsight/icons'

function Check(props) {
  const { checked } = props
  const icon = getIconProps(props.iconOptions)

  if (!checked) {
    return null
  }

  if (props.indeterminate) {
    // TODO: Add IndeterminateIcon when available
    return <p>-</p>
  }

  return <CheckIcon {...icon} />
}

export default function Checkbox(props) {
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })

  return (
    <label {...checkbox.checkboxContainer}>
      <input {...checkbox.input} onChange={props.onClick} />
      <span {...checkbox.checkboxControl}>
        <Check
          checked={checkbox.input.checked}
          iconOptions={checkbox.iconOptions}
          indeterminate={false}
        />
      </span>
      <label {...labelProps}>{value}</label>
    </label>
  )
}
