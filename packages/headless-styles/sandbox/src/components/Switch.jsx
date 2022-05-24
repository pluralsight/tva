import { useState, useEffect } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
  getJSSwitchProps,
} from '../../../src'

function SwitchField(props) {
  const { control, fieldOptions } = getFormControlProps(props)
  const switchProps = getSwitchProps({ ...props, ...fieldOptions })

  return (
    <div {...control}>
      <label {...getFormLabelProps({ htmlFor: props.id, size: props.size })}>
        {props.label}
      </label>
      <label {...switchProps.switchContainer}>
        <input {...switchProps.input} onClick={props.onClick} />
        <span {...switchProps.switchTrack}>
          <span {...switchProps.switchThumb} />
        </span>
      </label>
    </div>
  )
}

export default function Switch({ logJS }) {
  const [email, setEmail] = useState(false)

  function handleClick(e) {
    setEmail(e.target.checked)
  }

  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSSwitchProps({ id: 'email-alerts', label: 'Email' }),
      })
    }
  }, [logJS])

  return (
    <div id="switch">
      <h3>Switch</h3>
      <div className="App-container">
        <SwitchField
          id="email-alerts"
          label="Email alerts"
          onClick={handleClick}
          checked={email}
        />
        <SwitchField
          disabled={true}
          id="disabled-alerts"
          label="Disabled alerts"
        />
        <SwitchField
          invalid={true}
          id="invalid-alerts"
          label="Invalid alerts"
        />
      </div>
      <div className="App-container">
        <SwitchField
          id="s-alerts"
          label="Small alerts"
          onClick={handleClick}
          size="s"
          checked={email}
        />
        <SwitchField
          disabled={true}
          id="disabled-alerts"
          label="Disabled alerts"
          size="s"
        />
      </div>
    </div>
  )
}
