import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const { classes: insetClasses, ...insetA11yProps } = getProgressProps({
  kind: 'inset',
  now: 60,
})

export default function InsetProgress() {
  return (
    <Container column>
      <div {...insetClasses.wrapper}>
        <div {...insetA11yProps} {...insetClasses.bar} />
      </div>
    </Container>
  )
}
