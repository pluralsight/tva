import React from 'react'
import {
  getAlertProps,
  getIconProps,
  getIconButtonProps,
} from '@pluralsight/headless-styles'
import {
  InfoCircleIcon,
  CheckCircleIcon,
  CloseIcon,
  WarningTriangleIcon,
} from '@pluralsight/icons'

function matchIconType(kind) {
  switch (kind) {
    case 'success':
      return CheckCircleIcon

    case 'danger':
    case 'warning':
      return WarningTriangleIcon

    default:
      return InfoCircleIcon
  }
}

export default function Alert(props) {
  const { kind } = props
  const alert = getAlertProps({ kind: kind })
  const { button, iconOptions } = getIconButtonProps(alert.iconButtonOptions)
  const Icon = matchIconType(kind)

  return (
    <div {...alert.wrapper}>
      <span {...alert.iconWrapper}>
        <Icon {...getIconProps(alert.iconOptions)} />
      </span>
      <div {...alert.textContainer}>
        <h3
          {...alert.title}
          style={{
            margin: 0,
          }}
        >
          {props.alertTitle}
        </h3>
        <p
          {...alert.description}
          style={{
            marginBottom: 'initial',
          }}
        >
          {props.description}
        </p>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}
