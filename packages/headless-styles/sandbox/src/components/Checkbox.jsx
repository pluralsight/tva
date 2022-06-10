import { useState, useEffect } from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getJSCheckboxProps,
} from '../../../src'
import { CheckIcon } from '@pluralsight/icons'

const stateFields = [
  {
    checked: false,
    disabled: true,
    id: 1,
    label: 'Disabled',
    name: 'disabled',
    readOnly: false,
    required: false,
    value: '-1',
  },
  {
    checked: true,
    disabled: false,
    id: 2,
    label: 'Invalid',
    name: 'invalid',
    readOnly: false,
    required: false,
    value: '2',
  },
  {
    checked: false,
    disabled: false,
    id: 3,
    label: 'Required',
    name: 'required',
    required: true,
    value: '3',
  },
  {
    checked: false,
    disabled: false,
    id: 4,
    label: 'ReadOnly',
    name: 'readOnly',
    readOnly: true,
    required: false,
    value: '4',
  },
]

function CheckboxInput(props) {
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })
  const icon = getIconProps(checkbox.iconOptions)

  return (
    <label {...checkbox.checkboxContainer}>
      <input {...checkbox.input} onChange={props.onClick} />
      <span {...checkbox.checkboxControl}>
        {checkbox.input.checked && <CheckIcon {...icon} />}
      </span>
      <label {...labelProps}>{value}</label>
    </label>
  )
}

function StateForm(props) {
  const { control } = getFormControlProps({ groupType: 'radiogroup' })
  const [state, setState] = useState('2')

  function handleClick(e) {
    setState(e.target.value)
  }

  return (
    <div {...control}>
      {stateFields.map((option) => (
        <CheckboxInput
          {...option}
          onClick={handleClick}
          key={option.id}
          invalid={option.name === 'invalid'}
          checked={state === option.value}
        />
      ))}
    </div>
  )
}

export default function Checkbox({ logJS }) {
  const { control } = getFormControlProps()
  const [email, setEmail] = useState({
    email: false,
    sms: false,
  })

  function handleClick(event) {
    const { target } = event

    setEmail((prev) => ({
      ...prev,
      [target.value]: target.checked,
    }))
  }

  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSCheckboxProps({ checked: true, id: 'email-alerts' }),
      })
    }
  }, [logJS])

  return (
    <div id="checkbox">
      <h3>Checkbox</h3>
      <div className="App-container">
        <div {...control}>
          <CheckboxInput
            htmlFor="email"
            value="email"
            id="email"
            label="Email"
            onClick={handleClick}
            name="email"
            checked={email.email}
          />
          <CheckboxInput
            htmlFor="sms"
            value="sms"
            id="sms"
            label="SMS"
            onClick={handleClick}
            name="email1"
            checked={email.sms}
          />
        </div>
      </div>

      <div className="App-container">
        <StateForm />
      </div>
    </div>
  )
}
