import React from 'react'
import Container from '../Container/Container'
import { getBadgeProps } from '@pluralsight/headless-styles'

const psBadgeProps = getBadgeProps()
const psStrongBadgeProps = getBadgeProps({ kind: 'strong' })
const psMediumBadgeProps = getBadgeProps({ kind: 'medium' })
const psWeakBadgeProps = getBadgeProps({ kind: 'weak' })

export default function BasicBadge() {
  return (
    <Container>
      <span {...psBadgeProps}>Default</span>
      <span {...psStrongBadgeProps}>Strong</span>
      <span {...psMediumBadgeProps}>Medium</span>
      <span {...psWeakBadgeProps}>Weak</span>
    </Container>
  )
}
