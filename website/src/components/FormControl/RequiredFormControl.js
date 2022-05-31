import React from 'react'
import {
  getErrorMessageProps,
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function RequiredFormControl() {
  const { control, fieldOptions } = getFormControlProps({
    required: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: 'email',
    value: 'Email alerts',
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    id: 'email-address',
    message: 'Email address is required.',
  })

  console.log(error)

  return (
    <Container>
      <div>
        <div {...control}>
          <label {...labelProps}>{value}</label>
        </div>
        <div {...error.container}>
          <p {...error.message}>{error.message.value}</p>
        </div>
      </div>
    </Container>
  )
}

export default RequiredFormControl
