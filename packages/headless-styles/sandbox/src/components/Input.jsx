import { useState, useEffect } from 'react'
import {
  getErrorMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '../../../src'

function InputField(props) {
  const { onChange, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const { label, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: options.htmlFor,
    value: options.label,
  })
  const { value, ...inputProps } = getInputProps({
    ...options,
    ...fieldOptions,
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    message: props.errorMessage,
  })

  return (
    <div style={{ marginBottom: '1rem', width: '100%' }}>
      <label {...labelProps}>{labelProps.value}</label>
      {onChange ? (
        <input {...inputProps} onChange={onChange} value={value} />
      ) : (
        <input {...inputProps} defaultValue={props.defaultValue} />
      )}
      {fieldOptions.invalid && (
        <div {...error.container}>
          <p {...error.message}>{error.message.value}</p>
        </div>
      )}
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
          htmlFor="email"
          id="one"
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Email"
          required
          type="email"
          value={email}
        />
        <InputField
          disabled
          htmlFor="email"
          id="one"
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Disabled Input"
          value={email}
        />
        <InputField
          errorMessage="An email address is required."
          htmlFor="email"
          id="one"
          invalid
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Invalid Email"
          value={email}
        />
        <InputField
          defaultValue="Hello there"
          htmlFor="email"
          id="one"
          placeholder="Enter email"
          name="email"
          label="Readonly Email"
          readOnly
          type="email"
        />
      </div>
    </div>
  )
}
