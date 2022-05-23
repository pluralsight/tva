import React from 'react'
import { getSwitchProps } from '@pluralsight/headless-styles'

function Switch(props) {
  const switchProps = getSwitchProps(props)
  return (
    <label {...switchProps.switchContainer}>
      <input {...switchProps.input} onClick={props.onClick} />
      <span {...switchProps.switchTrack}>
        <span {...switchProps.switchThumb} />
      </span>
    </label>
  )
}

export default Switch
