import { useState } from 'react'
import { getSwitchProps } from '../../../src'

function SwitchField(props) {
  const switchProps = getSwitchProps(props)

  return (
    <div {...switchProps.wrapper}>
      <label {...switchProps.label}>{props.label}</label>
      <label {...switchProps.switchContainer}>
        <input {...switchProps.input} onClick={props.onClick} />
        <span {...switchProps.switchTrack}>
          <span {...switchProps.switchThumb} />
        </span>
      </label>
    </div>
  )
}

export default function Switch(props) {
  const [email, setEmail] = useState(false)

  function handleClick(e) {
    setEmail(e.target.checked)
  }

  return (
    <div id="switch">
      <h3>Switch</h3>
      <div className="App-container">
        <SwitchField
          htmlFor="email-alerts"
          label="Email alerts"
          onClick={handleClick}
          checked={email.toString()}
        />
        <SwitchField
          disabled="true"
          htmlFor="disabled-alerts"
          label="Disabled alerts"
        />
      </div>
      <div className="App-container">
        <SwitchField
          htmlFor="s-alerts"
          label="Small alerts"
          onClick={handleClick}
          size="s"
          checked={email.toString()}
        />
        <SwitchField
          disabled="true"
          htmlFor="disabled-alerts"
          label="Disabled alerts"
        />
      </div>
    </div>
  )
}
