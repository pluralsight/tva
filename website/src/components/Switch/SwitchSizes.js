import { getFormControlProps } from '@pluralsight/headless-styles'
import React, { useState } from 'react'
import Container from '../Container/Container'
import Switch from './Switch'

function SwitchSizes() {
  const { fieldOptions } = getFormControlProps()
  const [checked, setChecked] = useState(false)
  const [twoChecked, setTwoChecked] = useState(false)

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

  function handleTwoCheck(e) {
    setTwoChecked(e.target.checked)
  }

  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          width: '7rem',
        }}
      >
        <Switch
          {...fieldOptions}
          checked={checked}
          id="one"
          onClick={handleCheck}
          size="s"
        />
        <Switch
          {...fieldOptions}
          checked={twoChecked}
          id="two"
          onClick={handleTwoCheck}
        />
      </div>
    </Container>
  )
}

export default SwitchSizes
