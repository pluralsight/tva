import React from 'react'
import Container from '../Container/Container'
import { getCircularProgressProps } from '@pluralsight/headless-styles'

const loadingProps = getCircularProgressProps({
  kind: 'indeterminate',
})

export default function InsetCircularProgress() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
        }}
      >
        <div {...loadingProps.containerProps}>
          <svg {...loadingProps.svgBoxProps}>
            <circle {...loadingProps.baseCircleProps} />
            <circle {...loadingProps.nowCircleProps} />
          </svg>
        </div>
      </div>
    </Container>
  )
}
