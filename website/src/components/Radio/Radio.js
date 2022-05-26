import React from 'react'
import { getFormLabelProps, getRadioProps } from '@pluralsight/headless-styles'

export default function Radio(props) {
  const { onClick, ...radioOptions } = props
  const radioProps = getRadioProps(radioOptions)
  const { value, ...labelProps } = getFormLabelProps({
    ...radioOptions,
    value: props.label,
  })

  return (
    <label {...radioProps.radioContainer}>
      <input {...radioProps.input} onChange={onClick} />
      <span {...radioProps.radioControl} />
      <span {...labelProps}>{value}</span>
    </label>
  )
}
