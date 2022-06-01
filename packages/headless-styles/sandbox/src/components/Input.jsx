import { useState, useEffect } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '../../../src'

function InputField(props) {
  const { onChange, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const labelProps = getFormLabelProps({
    ...fieldOptions,
    htmlFor: options.name,
    label: options.label,
  })
  const inputProps = getInputProps({ ...options, ...fieldOptions })

  console.log(labelProps)

  return (
    <div style={{ width: '100%' }}>
      <label {...labelProps}>{labelProps.value}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default function Input(props) {
  const [email, setEmail] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <div id="input">
      <h3>Input</h3>
      <div className="App-container column">
        <InputField
          id="one"
          onChange={handleEmailChange}
          name="email"
          label="Email"
          required
          value={email}
        />
      </div>
    </div>
  )
}
