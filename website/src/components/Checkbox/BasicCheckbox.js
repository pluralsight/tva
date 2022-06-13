import React, { useState } from 'react'
import { getFormControlProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Checkbox from './Checkbox'

export default function BasicCheckbox({ logJS }) {
  const { control } = getFormControlProps()
  const [contactOptions, setContactOptions] = useState({
    email: false,
    sms: false,
  })

  function handleClick(event) {
    const { target } = event

    setContactOptions((prev) => ({
      ...prev,
      [target.value]: target.checked,
    }))
  }

  return (
    <Container>
      <div {...control}>
        <Checkbox
          htmlFor="email"
          value="email"
          id="email"
          label="Email"
          onClick={handleClick}
          name="contact"
          checked={contactOptions.email}
        />
        <Checkbox
          htmlFor="sms"
          value="sms"
          id="sms"
          label="SMS"
          onClick={handleClick}
          name="contact"
          checked={contactOptions.sms}
        />
        <Checkbox
          htmlFor="phone"
          value="phone"
          id="phone"
          label="Phone"
          onClick={handleClick}
          name="contact"
          checked={contactOptions.phone}
        />
      </div>
    </Container>
  )
}
