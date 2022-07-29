import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  memo,
} from 'react'
import { createPortal } from 'react-dom'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getDangerButtonProps,
  getAlertDialogProps,
  getJSAlertDialogProps,
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

function NormalAlert(props, triggerRef) {
  const { onClose, ...alertProps } = props
  const wrapperRef = useRef(null)
  const alert = getAlertDialogProps(alertProps)
  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {
    cancel: alert.cancelBtnOptions,
    primary: alert.primaryBtnOptions,
  })
  const { ref, onKeydown, initFocusTrap } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  useEffect(() => {
    initFocusTrap()
  }, [initFocusTrap])

  return (
    <div {...alert.backdrop}>
      <div {...alert.focusGuard} />

      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...alert.section} ref={ref} onKeyDown={onKeydown}>
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

const AlertDialogEl = memo(forwardRef(NormalAlert))

export default function AlertDialog({ logJS }) {
  const triggerRef = useRef(null)
  const destTriggerRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  const handleCloseDestructiveAlert = useCallback(() => {
    setShowDestructiveAlert(false)
  }, [])

  function handleShowDestructiveAlert() {
    setShowDestructiveAlert(true)
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSAlertDialogProps({
          id: 'sb-id',
          headerId: 'sb-headerId',
          bodyId: 'sb-bodyId',
        })
      )
    }
  }, [logJS])

  return (
    <div id="alert-dialog">
      <h3>Alert Dialog</h3>
      <div className="App-container">
        <button
          {...getButtonProps({ kind: 'medium' })}
          onClick={handleShowAlert}
          ref={triggerRef}
        >
          non-destructive
        </button>
        <button
          {...getDangerButtonProps({ kind: 'strong' })}
          onClick={handleShowDestructiveAlert}
          ref={destTriggerRef}
        >
          destructive
        </button>
      </div>

      {showAlert &&
        createPortal(
          <AlertDialogEl
            headerId="normalAlert-header"
            bodyId="normalAlert-body"
            id="normalAlert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          />,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <AlertDialogEl
            headerId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
