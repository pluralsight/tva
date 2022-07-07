import { getAlertProps, getIconProps, getIconButtonProps } from '../../../src'
import { CloseIcon, InfoCircleIcon } from '@pluralsight/icons'

function AlertEl(props) {
  const alert = getAlertProps(props.kind)
  const { button, iconOptions } = getIconButtonProps(alert.iconButtonOptions)

  return (
    <div {...alert.wrapper}>
      <span {...alert.iconWrapper}>
        <InfoCircleIcon {...getIconProps(alert.iconOptions)} />
      </span>
      <div {...alert.textContainer}>
        <h3 {...alert.title}>{props.alertTitle}</h3>
        <p {...alert.description}>{props.description}</p>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}

export default function Alert() {
  return (
    <div id="alert">
      <h3>Alert</h3>
      <div className="App-container column">
        <AlertEl
          alertTitle="Info alert"
          description="This is an example info alert about some information."
        />
        <br />
        <AlertEl
          alertTitle="Info alert"
          description="This is an example has a close button."
          showButton
        />
      </div>
    </div>
  )
}
