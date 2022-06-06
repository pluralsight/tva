import React, { useState } from 'react'
import {
  getButtonProps,
  getFormControlProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import { EyeIcon, EyeOffIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const fieldContainerStyle = {
  position: 'relative',
  width: '100%',
}

const btnStyle = {
  position: 'absolute',
  right: '0.3rem',
  top: '12px',
  zIndex: '100',
}

function PasswordInput() {
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const { fieldOptions } = getFormControlProps()
  const inputProps = getInputProps({
    ...fieldOptions,
    id: 'password',
    name: 'user_password',
    placeholder: 'Basic input',
    type: show ? 'text' : 'password',
    value: password,
  })

  function handleChange(e) {
    setPassword(e.target.value)
  }

  function handleToggleShow() {
    setShow((prev) => !prev)
  }

  return (
    <Container>
      <div style={fieldContainerStyle}>
        <input {...inputProps} onChange={handleChange} />
        <button
          {...getButtonProps({ kind: 'weak', size: 's' })}
          style={btnStyle}
        >
          <span {...getIconProps({ size: 'm' })} onClick={handleToggleShow}>
            {show ? <EyeIcon /> : <EyeOffIcon />}
          </span>
        </button>
      </div>
    </Container>
  )
}

export default PasswordInput
