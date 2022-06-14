import React from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getIconProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'

function Check(props) {
  const { checked } = props
  const icon = getIconProps(props.iconOptions)

  if (!checked) {
    return null
  }

  if (props.indeterminate === 'true') {
    return <IndeterminateIcon {...icon} />
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
          indeterminate={checkbox.input.indeterminate}
        />
      </span>
      <span {...labelProps}>{value}</span>
    </label>
  )
}
