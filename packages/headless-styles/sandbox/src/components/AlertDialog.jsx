import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps, getAlertDialogProps } from '../../../src'

function NormalAlert(props) {
  const { onClose, ...alertProps } = props
  const alert = getAlertDialogProps(alertProps)
  return (
    <div {...alert.backdrop}>
      <div {...alert.focusGuard} />
      <div {...alert.wrapper}>
        <section {...alert.section}>
          <header {...alert.alertTitle}>Test alert</header>
          <p {...alert.alertBody}>This is an example alert body.</p>
          <footer {...alert.buttonGroup}>
            <button {...getButtonProps({ kind: 'weak' })} onClick={onClose}>
              Cancel
            </button>
            <button {...getButtonProps({ kind: 'medium' })}>Action</button>
          </footer>
        </section>
      </div>
    </div>
  )
}

export default function AlertDialog() {
  const [showAlert, setShowAlert] = useState(false)

  function handleCloseAlert() {
    setShowAlert(false)
  }

  function handleShowAlert() {
    setShowAlert(true)
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
    </div>
  )
}
