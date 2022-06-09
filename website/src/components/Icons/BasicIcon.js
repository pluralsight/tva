import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psSmallIconProps = getIconProps({ size: 's' })
const psIconProps = getIconProps()
const psLargeIconProps = getIconProps({ size: 'l' })

function BasicIcon() {
  return (
    <Container>
      <MenuIcon {...psIconProps} />
      <MenuIcon {...psSmallIconProps} />
      <MenuIcon {...psIconProps} />
      <MenuIcon {...psLargeIconProps} />
    </Container>
  )
}

export default BasicIcon
