import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function BasicIconButton(props) {
  const { button, iconOptions } = getIconButtonProps({
    ariaLabel: `${props.kind} icon button kind`,
    kind: props.kind,
  })

  return (
    <button {...button} onClick={props.onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

function BasicButton() {
  return (
    <Container>
      <BasicIconButton />
      <BasicIconButton kind="textWeak" />
      <BasicIconButton kind="weak" />
      <BasicIconButton kind="medium" />
      <BasicIconButton kind="strong" />
    </Container>
  )
}

export default BasicButton
