import React from 'react'
import Container from '../Container/Container'
import { getCircularProgressProps } from '@pluralsight/headless-styles'

const xsProgressProps = getCircularProgressProps({
  now: 32,
  size: 'xs',
})
const progressProps = getCircularProgressProps({ now: 50 })

export default function CircularProgressSizes() {
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          width: '10rem',
        }}
      >
        <div {...xsProgressProps.containerProps}>
          <svg {...xsProgressProps.svgBoxProps}>
            <circle {...xsProgressProps.baseCircleProps} />
            <circle {...xsProgressProps.nowCircleProps} />
          </svg>
        </div>
        <div {...progressProps.containerProps}>
          <svg {...progressProps.svgBoxProps}>
            <circle {...progressProps.baseCircleProps} />
            <circle {...progressProps.nowCircleProps} />
          </svg>
        </div>
      </div>
    </Container>
  )
}
