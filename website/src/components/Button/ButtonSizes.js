import React from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const kind = 'medium'

const psXSButtonProps = getButtonProps({ kind, size: 'xs' })
const psSButtonProps = getButtonProps({ kind, size: 's' })
const psMButtonProps = getButtonProps({ kind })
const psLButtonProps = getButtonProps({ kind, size: 'l' })

function ButtonSizes() {
  return (
    <Container>
      <button {...psXSButtonProps}>xtra-small</button>
      <button {...psSButtonProps}>small</button>
      <button {...psMButtonProps}>medium</button>
      <button {...psLButtonProps}>large</button>
    </Container>
  )
}

export default ButtonSizes
