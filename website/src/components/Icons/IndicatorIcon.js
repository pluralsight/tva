import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { VolumeOffIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IndicatorIcon() {
  return (
    <Container>
      <VolumeOffIcon {...getIconProps({ ariaLabel: 'Volume is off' })} />
    </Container>
  )
}

export default IndicatorIcon
