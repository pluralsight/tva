import { useCallback, useEffect, useRef } from 'react'
import type { RefObject } from 'react'

export function useFocusTrap(triggerRef: RefObject<HTMLButtonElement>) {
  const modalRef = useRef<HTMLElement>(null)
  const selectorList =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

  const getFocusItems = useCallback(() => {
    const focusableItems =
      modalRef.current?.querySelectorAll(selectorList) ?? []
    return {
      firstItem: focusableItems[0] as HTMLElement,
      lastItem: focusableItems[focusableItems.length - 1] as HTMLElement,
    }
  }, [modalRef])

  const handleFocus = useCallback(
    (event) => {
      const { activeElement } = document
      const { firstItem, lastItem } = getFocusItems()

      if (event.key !== 'Tab') {
        return
      }

      if (event.shiftKey) {
        if (activeElement === firstItem) {
          event.preventDefault()
          lastItem.focus()
        }
      } else {
        if (activeElement === lastItem) {
          event.preventDefault()
          firstItem.focus()
        }
      }
    },
    [getFocusItems, modalRef]
  )

  const handleInitFocusTrap = useCallback(() => {
    document.body.setAttribute('data-modal-open', 'true')

    if (modalRef.current != null) {
      const { firstItem } = getFocusItems()
      if (document.activeElement !== firstItem) {
        firstItem.focus()
      }
    }
  }, [getFocusItems, modalRef])

  useEffect(() => {
    return () => {
      document.body.removeAttribute('data-modal-open')
      triggerRef.current?.focus()
    }
  }, [triggerRef])

  return {
    ref: modalRef,
    initFocusTrap: handleInitFocusTrap,
    onKeydown: handleFocus,
  }
}
