import React, { useState } from 'react'
import {
  getFormLabelProps,
  getFormControlProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Checkbox from './Checkbox'

const controlStyles = {
  justifyContent: 'space-between',
  width: '100%',
}

function Checked() {
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'checked-example',
    value: 'checked:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Checkbox {...fieldOptions} checked={true} />
    </div>
  )
}

function Indeterminate() {
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'indeterminate-example',
    value: 'indeterminate:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Checkbox {...fieldOptions} checked={true} indeterminate={true} />
    </div>
  )
}

function Disabled() {
  const { control, fieldOptions } = getFormControlProps({
    disabled: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'disabled-exampled',
    value: 'disabled:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Checkbox {...fieldOptions} />
    </div>
  )
}

function Invalid() {
  const { control, fieldOptions } = getFormControlProps({
    invalid: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'invalid-exampled',
    value: 'invalid:',
  })

  return (
    <div {...control} style={controlStyles}>
      <label {...labelProps}>{value}</label>
      <Checkbox {...fieldOptions} checked={true} />
    </div>
  )
}

function ReadOnly() {
  const { control, fieldOptions } = getFormControlProps({
    readOnly: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'readOnly-exampled',
    value: 'readOnly:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Checkbox {...fieldOptions} />
    </div>
  )
}

function Required(props) {
  const { control, fieldOptions } = getFormControlProps({
    required: true,
  })
  const labelProps = getFormLabelProps({
    htmlFor: 'required-exampled',
    value: '',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>required:</label>
      <Checkbox
        {...fieldOptions}
        checked={props.checked}
        onClick={props.onClick}
      />
    </div>
  )
}

function CheckboxStates() {
  const [requiredChecked, setRequiredChecked] = useState(false)

  function handleRequiredChecked(e) {
    setRequiredChecked(e.target.checked)
  }

  return (
    <Container>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem 5rem',
          width: '75%',
        }}
      >
        <Checked />
        <Disabled />
        <Invalid />
        <ReadOnly />
        <Required checked={requiredChecked} onClick={handleRequiredChecked} />
        <Indeterminate />
      </div>
    </Container>
  )
}

export default CheckboxStates
