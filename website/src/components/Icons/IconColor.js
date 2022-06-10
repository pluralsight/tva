import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { WarningIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps()

function IconColor() {
  return (
    <Container>
      <div
        style={{
          color: 'var(--ps-danger-text)',
          backgroundColor: 'var(--ps-danger-background-weak)',
          display: 'flex',
          alignItems: 'center',
          padding: '1em',
          borderRadius: '3px',
          width: '100%',
        }}
      >
        <WarningIcon {...psIconProps} />
        &nbsp; Watch for demogorgons.
      </div>
    </Container>
  )
}

export default IconColor
