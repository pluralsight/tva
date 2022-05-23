import React, { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Switch from './Switch'

function BasicSwitch() {
  const [checked, setChecked] = useState(false)
  const { control, fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: 'email',
    value: 'Email alerts',
  })

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

  return (
    <Container>
      <div {...control}>
        <label {...labelProps}>{value}</label>
        <Switch {...fieldOptions} checked={checked} onClick={handleCheck} />
      </div>
    </Container>
  )
}

export default BasicSwitch
