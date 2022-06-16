import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { HomeIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps({ ariaHidden: true })

function InteractiveIcon() {
  return (
    <Container>
      <span
        style={{ display: 'inline-flex', alignItems: 'center', gap: '.5em' }}
      >
        <a
          href="/"
          aria-label="Navigate to home page"
          style={{ lineHeight: 0 }}
        >
          <HomeIcon {...psIconProps} />
        </a>
        &nbsp;|&nbsp;<a href="#">Page 1</a>&nbsp;|&nbsp;<a href="#">Page 2</a>
      </span>
    </Container>
  )
}

export default InteractiveIcon
