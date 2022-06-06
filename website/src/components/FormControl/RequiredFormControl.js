import React, { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const formId = 'basic'
const formName = 'basic-example'

function BasicFormControl() {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps({
    required: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: formId,
    value: 'Email alerts',
  })
  const inputProps = getInputProps({
    ...fieldOptions,
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
    </Container>
  )
}

export default BasicFormControl
