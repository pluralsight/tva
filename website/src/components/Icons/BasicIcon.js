import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import {
  PreviousIcon,
  SkipBackwardIcon,
  PlayIcon,
  SkipForwardIcon,
  NextIcon,
} from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps()

function BasicIcon() {
  return (
    <Container>
      <PreviousIcon {...psIconProps} />
      <SkipBackwardIcon {...psIconProps} />
      <PlayIcon {...psIconProps} />
      <SkipForwardIcon {...psIconProps} />
      <NextIcon {...psIconProps} />
    </Container>
  )
}

export default BasicIcon
