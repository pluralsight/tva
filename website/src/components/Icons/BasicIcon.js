import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps()

function BasicIcon() {
  return (
    <Container>
      <MenuIcon {...psIconProps} />
    </Container>
  )
}

export default BasicIcon
