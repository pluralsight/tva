import React, { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getFieldMessageProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const formId = 'basic'
const formName = 'basic-example'

function BasicFormControl() {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: formId,
    value: 'Email alerts',
  })
  const { value: helpText, ...message } = getFieldMessageProps({
    id: 'email:help',
    message: 'We will never share your email.',
  })
  const inputProps = getInputProps({
    ...fieldOptions,
    describedBy: message.id,
    id: formId,
    name: formName,
    placeholder: 'email@example.com',
    type: 'email',
    value: email,
  })

  function handleChange(e) {
    setEmail(e.target.value)
  }

  return (
    <Container column>
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
      <p
        {...message}
        style={{
          marginBottom: 0,
          width: '100%',
        }}
      >
        {helpText}
      </p>
    </Container>
  )
}

export default BasicFormControl
