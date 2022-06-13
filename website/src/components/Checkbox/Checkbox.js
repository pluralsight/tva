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
    // TODO: Add IndeterminateIcon when available & update Checkbox prop
    return <p>-</p>
  }

  return <CheckIcon {...icon} />
}

export default function Checkbox(props) {
  const { onClick } = props
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })
  const { checked, ...inputProps } = checkbox.input

  return (
    <label {...checkbox.checkboxContainer}>
      {onClick && (
        <input {...inputProps} checked={checked} onChange={props.onClick} />
      )}
      {!onClick && <input {...inputProps} defaultChecked={checked} />}
      <span {...checkbox.checkboxControl}>
        <Check
          checked={checked}
          iconOptions={checkbox.iconOptions}
          indeterminate={false}
        />
      </span>
      <label {...labelProps}>{value}</label>
    </label>
  )
}
