import React from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const psButtonProps = getButtonProps()
const psTextWeakButtonProps = getButtonProps({ kind: 'text-weak' })
const psWeakButtonProps = getButtonProps({ kind: 'weak' })
const psMediumButtonProps = getButtonProps({ kind: 'medium' })
const psStrongButtonProps = getButtonProps({ kind: 'strong' })

function BasicButton() {
  return (
    <Container>
      <button {...psButtonProps}>default</button>
      <button {...psTextWeakButtonProps}>text-weak</button>
      <button {...psWeakButtonProps}>weak</button>
      <button {...psMediumButtonProps}>medium</button>
      <button {...psStrongButtonProps}>strong</button>
    </Container>
  )
}

export default BasicButton
