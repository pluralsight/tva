import React from 'react'
import { getFormLabelProps, getRadioProps } from '@pluralsight/headless-styles'

export default function Radio(props) {
  const { onClick, ...radioOptions } = props
  const radioProps = getRadioProps(radioOptions)
  const { value, ...labelProps } = getFormLabelProps({
    ...radioOptions,
    value: props.label,
  })
  const { checked, ...inputProps } = radioProps.input

  return (
    <label {...radioProps.radioContainer}>
      {onClick && (
        <input {...inputProps} onChange={onClick} checked={checked} />
      )}
      {!onClick && <input {...inputProps} defaultChecked={checked} />}
      <span {...radioProps.radioControl} />
      <span {...labelProps}>{value}</span>
    </label>
  )
}
