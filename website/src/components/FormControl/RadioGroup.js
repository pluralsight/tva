import React from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function RadioGroup() {
  const { control, fieldOptions } = getFormControlProps()
  const labelProps = getFormLabelProps({ htmlFor: 'email' })

  return (
    <Container>
      <div {...control}>
        <label {...labelProps}>Email alerts</label>
      </div>
    </Container>
  )
}

export default RadioGroup
