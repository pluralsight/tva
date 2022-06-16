import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { BriefcaseIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps({ ariaHidden: true })

function DecorativeIcon() {
  return (
    <Container>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <BriefcaseIcon {...psIconProps} />
        &nbsp;Business Account
      </span>
    </Container>
  )
}

export default DecorativeIcon
