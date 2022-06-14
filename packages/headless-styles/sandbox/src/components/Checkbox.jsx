import { useState, useEffect } from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getJSCheckboxProps,
} from '../../../src'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'

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
    invalid: true,
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
  {
    checked: true,
    disabled: false,
    indeterminate: true,
    id: 5,
    label: 'Indeterminate',
    name: 'indeterminate',
    readOnly: false,
    required: false,
    value: '5',
  },
]

function Icon(props) {
  const { checked, indeterminate } = props
  const icon = getIconProps(props.iconOptions)

  if (!checked) {
    return null
  }

  if (indeterminate === 'true') {
    return <IndeterminateIcon {...icon} />
  }

  if (checked) {
    return <CheckIcon {...icon} />
  }

  return null
}

function CheckboxInput(props) {
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })

  return (
    <label {...checkbox.checkboxContainer}>
      <input {...checkbox.input} onChange={props.onClick} />
      <span {...checkbox.checkboxControl}>
        <Icon
          checked={checkbox.input.checked}
          indeterminate={checkbox.input.indeterminate}
          iconOptions={checkbox.iconOptions}
        />
      </span>
      <label {...labelProps}>{value}</label>
    </label>
  )
}

function StateForm() {
  const { control } = getFormControlProps()
  const [state, setState] = useState('')

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
          checked={option.checked ?? state === options.value}
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
