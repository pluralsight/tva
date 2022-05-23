import React from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function RadioGroup() {
  const { control } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    htmlFor: 'email',
    value: 'Email alerts',
  })

  return (
    <Container>
      <div {...control}>
        <label {...labelProps}>{value}</label>
      </div>
    </Container>
  )
}

export default RadioGroup
