import React, { useState } from 'react'
import {
  getFormControlProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function BasicInput() {
  const [name, setName] = useState('')
  const { fieldOptions } = getFormControlProps()
  const inputProps = getInputProps({
    ...fieldOptions,
    id: 'name',
    name: 'full_name',
    placeholder: 'Basic input',
    value: name,
  })

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <Container>
      <input {...inputProps} onChange={handleChange} />
    </Container>
  )
}

export default BasicInput
