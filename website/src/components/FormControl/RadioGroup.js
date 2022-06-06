import React, { useState } from 'react'
import { getFormControlProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Radio from '../Radio/Radio'

function BasicRadio() {
  const [checked, setChecked] = useState(null)
  const { control, fieldOptions } = getFormControlProps({
    groupType: 'radiogroup',
  })

  function handleCheck(e) {
    setChecked(e.target.value)
  }

  return (
    <Container>
      <div {...control}>
        <Radio
          {...fieldOptions}
          checked={checked === '0'}
          htmlFor="First"
          id="first"
          label="First"
          value="0"
          onClick={handleCheck}
        />
        <Radio
          {...fieldOptions}
          checked={checked === '1'}
          htmlFor="Second"
          id="second"
          label="Second"
          value="1"
          onClick={handleCheck}
        />
        <Radio
          {...fieldOptions}
          checked={checked === '2'}
          htmlFor="Third"
          id="third"
          label="Third"
          value="2"
          onClick={handleCheck}
        />
      </div>
    </Container>
  )
}

export default BasicRadio
