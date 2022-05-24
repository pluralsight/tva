import { useState, useEffect } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getRadioProps,
  getJSRadioProps,
} from '../../../src'

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

function RadioInput(props) {
  const { fieldOptions } = getFormControlProps({
    ...props,
    groupType: 'radiogroup',
  })
  const radio = getRadioProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })

  return (
    <label {...radio.radioContainer}>
      <input {...radio.input} onChange={props.onClick} />
      <span {...radio.radioControl} />
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
        <RadioInput
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

export default function Radio({ logJS }) {
  const { control } = getFormControlProps({ groupType: 'radiogroup' })
  const [email, setEmail] = useState(null)

  function handleClick(e) {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSRadioProps({ checked: true, id: 'email-alerts' }),
      })
    }
  }, [logJS])

  return (
    <div id="radio">
      <h3>Radio</h3>
      <div className="App-container">
        <div {...control}>
          <RadioInput
            htmlFor="email"
            value="0"
            id="email"
            label="Email"
            onClick={handleClick}
            name="email"
            checked={email === '0'}
          />
          <RadioInput
            htmlFor="email"
            value="1"
            id="email-1"
            label="SMS"
            onClick={handleClick}
            name="email1"
            checked={email === '1'}
          />
          <RadioInput
            htmlFor="email"
            value="2"
            id="email-2"
            label="Other"
            onClick={handleClick}
            name="email2"
            checked={email === '2'}
          />
        </div>
        <p style={{ width: '50%' }}>Selection: {email}</p>
      </div>

      <div className="App-container">
        <StateForm />
      </div>
    </div>
  )
}
