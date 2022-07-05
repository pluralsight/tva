import React, { useState } from 'react'
import { getTextareaProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function BasicTextarea() {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <Container>
      <textarea
        {...getTextareaProps({
          id: 'default',
          name: 'default',
          placeholder: 'Default resize',
          value: text,
        })}
        onChange={handleChange}
      />
    </Container>
  )
}

export default BasicTextarea
