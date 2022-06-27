import React from 'react'
import {
  getButtonWithIconProps,
  getDangerButtonWithIconProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DeleteIcon, DownloadIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function Button({ kind, size, label, side }) {
  const { button, iconOptions } = getButtonWithIconProps({
    kind,
    size,
  })
  const iconProps = getIconProps(iconOptions)

  return (
    <button {...button}>
      {side !== 'end' && <DownloadIcon {...iconProps} />}
      {label}
      {side === 'end' && <DownloadIcon {...iconProps} />}
    </button>
  )
}

function DangerButton({ kind, size, label, side }) {
  const { button, iconOptions } = getDangerButtonWithIconProps({
    kind,
    size,
  })
  const iconProps = getIconProps(iconOptions)

  return (
    <button {...button}>
      {side !== 'end' && <DeleteIcon {...iconProps} />}
      {label}
      {side === 'end' && <DeleteIcon {...iconProps} />}
    </button>
  )
}

function ButtonWithIcon() {
  return (
    <Container>
      <Button kind="medium" label="Icon at start" />
      <Button kind="medium" side="end" label="Icon at end" />
      <DangerButton kind="medium" label="Icon at start" />
      <DangerButton kind="medium" side="end" label="Icon at end" />
    </Container>
  )
}

export default ButtonWithIcon
