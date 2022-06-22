import React from 'react'
import {
  getDangerIconButtonProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DeleteIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function DeleteButton(props) {
  const { button, iconOptions } = getDangerIconButtonProps({
    kind: props.kind,
    variant: props.variant,
  })
  const iconProps = getIconProps(iconOptions)

  return (
    <button {...button}>
      <DeleteIcon {...iconProps} />
    </button>
  )
}

function DangerIconButton() {
  return (
    <Container>
      <DeleteButton />
      <DeleteButton variant="round" />
      <DeleteButton kind="medium" />
      <DeleteButton variant="round" kind="medium" />
      <DeleteButton kind="strong" />
      <DeleteButton variant="round" kind="strong" />
    </Container>
  )
}

export default DangerIconButton
