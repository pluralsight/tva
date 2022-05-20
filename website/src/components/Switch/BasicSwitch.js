import React, { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function Switch(props) {
  const switchProps = getSwitchProps(props)
  return (
    <label {...switchProps.switchContainer}>
      <input {...switchProps.input} onClick={props.onClick} />
      <span {...switchProps.switchTrack}>
        <span {...switchProps.switchThumb} />
      </span>
    </label>
  )
}

function BasicSwitch() {
  const [checked, setChecked] = useState(false)
  const { control, fieldOptions } = getFormControlProps()
  const labelProps = getFormLabelProps(fieldOptions)

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

  return (
    <Container>
      <div {...control}>
        <label {...labelProps}>Email alerts</label>
        <Switch {...fieldOptions} checked={checked} onClick={handleCheck} />
      </div>
    </Container>
  )
}

export default BasicSwitch
