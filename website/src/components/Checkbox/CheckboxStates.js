import React, { useState } from 'react'
import {
  getFormLabelProps,
  getFormControlProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Radio from './Radio'

const controlStyles = {
  justifyContent: 'space-between',
  width: '100%',
}

function CheckedRadio() {
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'checked-example',
    value: 'checked:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Radio {...fieldOptions} checked={true} />
    </div>
  )
}

function IndeterminateRadio() {
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'checked-example',
    value: 'checked:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Radio {...fieldOptions} checked={true} indeterminate={true} />
    </div>
  )
}

function DisabledRadio() {
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
      <Radio {...fieldOptions} />
    </div>
  )
}

function InvalidRadio() {
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
      <Radio {...fieldOptions} checked={true} />
    </div>
  )
}

function ReadOnlyRadio() {
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
      <Radio {...fieldOptions} />
    </div>
  )
}

function RequiredRadio(props) {
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
      <Radio
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
        <CheckedRadio />
        <DisabledRadio />
        <InvalidRadio />
        <ReadOnlyRadio />
        <RequiredRadio
          checked={requiredChecked}
          onClick={handleRequiredChecked}
        />
      </div>
    </Container>
  )
}

export default CheckboxStates
