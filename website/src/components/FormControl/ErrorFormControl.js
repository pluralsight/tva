import React, { useState } from 'react'
import {
  getErrorMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function ErrorFormControl() {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps({
    invalid: true,
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
  const inputProps = getInputProps({
    ...fieldOptions,
    describedBy: error.container.id,
    id: 'email',
    name: 'required',
    placeholder: 'email@example.com',
    value: email,
  })

  function handleChange() {
    setEmail('')
  }

  return (
    <Container column alignItems="flex-start">
      <label
        {...labelProps}
        style={{
          marginInlineEnd: 'initial',
          width: '100%',
        }}
      >
        {value}
      </label>
      <input {...inputProps} onChange={handleChange} />
      <div {...error.container}>
        <p {...error.message}>{error.message.value}</p>
      </div>
    </Container>
  )
}

export default ErrorFormControl
