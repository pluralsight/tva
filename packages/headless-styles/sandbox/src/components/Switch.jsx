import { useState, useEffect } from 'react'
import { getSwitchProps, getJSSwitchProps } from '../../../src'

function SwitchField(props) {
  const switchProps = getSwitchProps(props)

  return (
    <div {...switchProps.wrapper}>
      <label {...switchProps.label}>{switchProps.label.value}</label>
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
        ...getJSSwitchProps({ htmlFor: 'email-alerts', label: 'Email' }),
      })
    }
  }, [logJS])

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
