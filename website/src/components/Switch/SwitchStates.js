import React, { useState } from 'react'
import {
  getFormLabelProps,
  getFormControlProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Switch from './Switch'

const controlStyles = {
  justifyContent: 'space-between',
  paddingInlineEnd: '16rem',
  width: '100%',
}

function CheckedSwitch() {
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'checked-example',
    value: 'checked:',
  })

  return (
    <div {...control} style={{ ...controlStyles }}>
      <label {...labelProps}>{value}</label>
      <Switch {...fieldOptions} checked={true} />
    </div>
  )
}

function DisabledSwitch() {
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
      <Switch {...fieldOptions} />
    </div>
  )
}

function InvalidSwitch() {
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
      <Switch {...fieldOptions} />
    </div>
  )
}

function ReadOnlySwitch() {
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
      <Switch {...fieldOptions} checked={true} />
    </div>
  )
}

function RequiredSwitch(props) {
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
      <Switch
        {...fieldOptions}
        checked={props.checked}
        onClick={props.onClick}
      />
    </div>
  )
}

function SwitchStates() {
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
          gap: '1rem',
          width: '100%',
        }}
      >
        <CheckedSwitch />
        <DisabledSwitch />
        <InvalidSwitch />
        <ReadOnlySwitch />
        <RequiredSwitch
          checked={requiredChecked}
          onClick={handleRequiredChecked}
        />
      </div>
    </Container>
  )
}

export default SwitchStates
