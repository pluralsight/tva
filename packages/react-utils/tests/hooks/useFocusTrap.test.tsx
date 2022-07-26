import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { render } from '@testing-library/react'
// import { useFocusTrap } from '../src'

describe('useFocusTrap', () => {
  function Wrapper() {
    const triggerRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleCloseAlert = useCallback(() => {
      setOpen(false)
    }, [])

    function handleShowAlert() {
      setOpen(true)
    }

    return (
      <div>
        <button onClick={handleShowAlert} ref={triggerRef} type="button">
          trigger
        </button>
        <div>
          <button type="button">background 1</button>
          <button type="button">background 2</button>
          <button type="button">background 3</button>
        </div>
        {open &&
          createPortal(
            <AlertDialog onCancel={handleCloseAlert} />,
            document.getElementById('root') as Element
          )}
      </div>
    )
  }

  interface AlertProps {
    onCancel: () => void
  }

  function AlertDialog(props: AlertProps) {
    return <div onClick={props.onCancel}>working</div>
  }

  test('hook should trap focus in UI alert dialog component', () => {
    render(<Wrapper />)
  })

  test('hook should return focus to triggerRef when dialog closed', () => {})
})
