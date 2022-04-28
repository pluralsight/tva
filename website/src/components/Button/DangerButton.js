import React from 'react'
import { getDangerButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const psButtonProps = getDangerButtonProps()
const psMediumButtonProps = getDangerButtonProps({ kind: 'medium' })
const psStrongButtonProps = getDangerButtonProps({ kind: 'strong' })

function DangerButton() {
  return (
    <Container>
      <button {...psButtonProps}>default</button>
      <button {...psMediumButtonProps}>medium</button>
      <button {...psStrongButtonProps}>strong</button>
    </Container>
  )
}

export default DangerButton
