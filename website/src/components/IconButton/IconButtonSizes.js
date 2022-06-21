import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const kind = 'medium'

function IconButton(props) {
  const Icon = props.icon
  const { button, iconOptions } = getIconButtonProps({
    kind: props.kind,
    size: props.size,
    ariaLabel: props.ariaLabel,
  })

  return (
    <button {...button}>
      <Icon {...getIconProps(iconOptions)} />
    </button>
  )
}

function IconButtonSizes() {
  return (
    <Container>
      <IconButton
        icon={ChevronRightIcon}
        kind={kind}
        size="xs"
        ariaLabel="extra small icon button"
      />
      <IconButton
        icon={ChevronRightIcon}
        kind={kind}
        size="s"
        ariaLabel="small icon button"
      />
      <IconButton
        icon={ChevronRightIcon}
        kind={kind}
        size="m"
        ariaLabel="medium icon button"
      />
      <IconButton
        icon={ChevronRightIcon}
        kind={kind}
        size="l"
        ariaLabel="large icon button"
      />
    </Container>
  )
}

export default IconButtonSizes
