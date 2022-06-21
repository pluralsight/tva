import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { PencilIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function DefaultIcon(props) {
  const { button, iconOptions } = getIconButtonProps({
    kind: 'medium',
    size: props.size,
    ariaLabel: 'default icon button variant',
  })

  return (
    <button {...button}>
      <PencilIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

function RoundIcon(props) {
  const { button: roundButton, iconOptions: roundIconOptions } =
    getIconButtonProps({
      kind: 'medium',
      size: props.size,
      ariaLabel: 'round icon button variant',
      variant: 'round',
    })

  return (
    <button {...roundButton}>
      <PencilIcon {...getIconProps(roundIconOptions)} />
    </button>
  )
}

function IconButtonVariants() {
  return (
    <Container>
      <div>
        <p>
          <DefaultIcon size="xs" />
        </p>
        <p>
          <RoundIcon size="xs" />
        </p>
      </div>
      <div>
        <p>
          <DefaultIcon size="s" />
        </p>
        <p>
          <RoundIcon size="s" />
        </p>
      </div>
      <div>
        <p>
          <DefaultIcon size="m" />
        </p>
        <p>
          <RoundIcon size="m" />
        </p>
      </div>
      <div>
        <p>
          <DefaultIcon size="l" />
        </p>
        <p>
          <RoundIcon size="l" />
        </p>
      </div>
    </Container>
  )
}

export default IconButtonVariants
