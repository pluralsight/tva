import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import {
  getButtonProps,
  getDangerButtonProps,
  getAlertDialogProps,
} from '../../../src'

function getButtonStyleProps(kind, btnOptions) {
  const { cancel, primary } = btnOptions
  const cancelBtnProps = getButtonProps(cancel)
  const primaryBtnProps =
    kind === 'destructive'
      ? getDangerButtonProps(primary)
      : getButtonProps(primary)

  return {
    cancelBtnProps,
    primaryBtnProps,
  }
}

function NormalAlert(props) {
  const { onClose, ...alertProps } = props
  const alert = getAlertDialogProps(alertProps)
  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {
    cancel: alert.cancelBtnOptions,
    primary: alert.primaryBtnOptions,
  })

  return (
    <div {...alert.backdrop}>
      <div {...alert.focusGuard} />

      <div {...alert.wrapper}>
        <section {...alert.section}>
          <header {...alert.alertTitle}>Test alert</header>
          <p {...alert.alertBody}>
            This is an example alert body that has some really long content
            because the copy writer is not good and has to say a lot.
          </p>
          <footer {...alert.buttonGroup}>
            <button {...cancelBtnProps} onClick={onClose}>
              Cancel
            </button>
            <button {...primaryBtnProps}>Action</button>
          </footer>
        </section>
      </div>

      <div {...alert.focusGuard} />
    </div>
  )
}

export default function AlertDialog() {
  const [showAlert, setShowAlert] = useState(false)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)

  function handleCloseAlert() {
    setShowAlert(false)
  }

  function handleShowAlert() {
    setShowAlert(true)
  }

  function handleCloseDestructiveAlert() {
    setShowDestructiveAlert(false)
  }

  function handleShowDestructiveAlert() {
    setShowDestructiveAlert(true)
  }

  return (
    <div id="alert-dialog">
      <h3>Alert Dialog</h3>
      <div className="App-container">
        <button
          {...getButtonProps({ kind: 'medium' })}
          onClick={handleShowAlert}
        >
          non-destructive
        </button>
        <button
          {...getDangerButtonProps({ kind: 'strong' })}
          onClick={handleShowDestructiveAlert}
        >
          destructive
        </button>
      </div>

      {showAlert &&
        createPortal(
          <NormalAlert
            headerId="normalAlert-header"
            bodyId="normalAlert-body"
            id="normalAlert"
            onClose={handleCloseAlert}
          />,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <NormalAlert
            headerId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
