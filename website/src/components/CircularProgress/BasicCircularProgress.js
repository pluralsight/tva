import React from 'react'
import Container from '../Container/Container'
import { getCircularProgressProps } from '@pluralsight/headless-styles'

const progressProps = getCircularProgressProps({
  now: 32,
})
const loadingProps = getCircularProgressProps({
  kind: 'indeterminate',
})

export default function BasicProgress() {
  return (
    <Container>
      <div {...progressProps.containerProps}>
        <svg {...progressProps.svgBoxProps}>
          <circle {...progressProps.baseCircleProps} />
          <circle {...progressProps.nowCircleProps} />
        </svg>
      </div>
      <div {...loadingProps.containerProps}>
        <svg {...loadingProps.svgBoxProps}>
          <circle {...loadingProps.baseCircleProps} />
          <circle {...loadingProps.nowCircleProps} />
        </svg>
      </div>
    </Container>
  )
}
