import React from 'react'
import {
  getIconProps,
  getIconButtonProps,
  getButtonProps,
} from '@pluralsight/headless-styles'
import { HomeIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Navivgate to home page',
})
const homeIconProps = getIconProps(iconOptions)

const { type, ...linkProps } = getButtonProps()

function InteractiveIcon() {
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <a href="/" {...button}>
          <HomeIcon {...homeIconProps} />
        </a>
        <a href="#" {...linkProps}>
          Page 1
        </a>
        <a href="#" {...linkProps}>
          Page 2
        </a>
        <a href="#" {...linkProps}>
          Page 3
        </a>
        <a href="#" {...linkProps}>
          Page 4
        </a>
      </div>
    </Container>
  )
}

export default InteractiveIcon
