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
const linkProps = getButtonProps()

function InteractiveIcon() {
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <a className={button.className} href="/">
          <HomeIcon {...homeIconProps} />
        </a>
        <a href="#" className={linkProps.className}>
          Page 1
        </a>
        <a href="#" className={linkProps.className}>
          Page 2
        </a>
        <a href="#" className={linkProps.className}>
          Page 3
        </a>
        <a href="#" className={linkProps.className}>
          Page 4
        </a>
      </div>
    </Container>
  )
}

export default InteractiveIcon
