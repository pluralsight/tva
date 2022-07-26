import {
  StrictMode,
  RefObject,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal, createRoot } from 'react-dom'
import { render, user, screen } from 'test-utils'
import { useFocusTrap } from '../../src'

describe('useFocusTrap', () => {
  function Wrapper() {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [open, setOpen] = useState(false)

    const handleCloseAlert = useCallback(() => {
      setOpen(false)
    }, [])

    function handleShowAlert() {
      setOpen(true)
    }

    return (
      <div className="Wrapper">
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
            <AlertDialog onClose={handleCloseAlert} triggerRef={triggerRef} />,
            document.body
          )}
      </div>
    )
  }

  interface AlertProps {
    onClose: () => void
    triggerRef: RefObject<HTMLButtonElement>
  }

  function AlertDialog(props: AlertProps) {
    const { onClose } = props
    const wrapperRef = useRef(null)
    const { ref, onKeydown, initFocusTrap } = useFocusTrap(props.triggerRef)

    function handleBackdropClick(event: SyntheticEvent) {
      event.stopPropagation()
      if (wrapperRef.current === event.target) {
        onClose()
      }
    }

    useEffect(() => {
      initFocusTrap()
    }, [initFocusTrap])

    useEffect(() => {
      function handleEscClose(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          event.stopPropagation()
          onClose()
        }
      }
      window.addEventListener('keydown', handleEscClose, false)

      return () => {
        window.removeEventListener('keydown', handleEscClose, false)
      }
    }, [onClose])

    return (
      <div className="AlertDialog">
        <div />

        <div ref={wrapperRef} onClick={handleBackdropClick}>
          <section ref={ref} onKeyDown={onKeydown}>
            <header>Test alert</header>
            <p>This is an example alert body.</p>
            <footer>
              <button onClick={onClose}>Cancel</button>
              <button>Action</button>
            </footer>
          </section>
        </div>

        <div />
      </div>
    )
  }

  async function setupApp() {
    try {
      const rootEl = document.createElement('div')
      rootEl.id = 'root'

      const root = createRoot(rootEl)
      root.render(
        <StrictMode>
          <Wrapper />
        </StrictMode>
      )
    } catch (error) {
      throw Error('setupApp failed.')
    }
  }

  test('hook should trap focus in UI alert dialog component', async () => {
    await setupApp()
    render(<Wrapper />)
    await user.click(screen.getByText(/trigger/i))
    screen.debug()
    // validate focus is on cancel button
    // validate cannot focus on other buttons outside of alert
    // close alert via cancel click
  })

  test('hook should return focus to triggerRef when dialog closed', () => {
    // validate focus is on cancel button
    // validate cannot focus on other buttons outside of alert
    // close alert via cancel click
    // validate focus is on trigger button
  })
})
