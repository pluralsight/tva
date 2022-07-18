import type { Tech } from '../types'
import type { AlertDialogOptions, Kind } from './types'

const defaultAlertDialogOptions = {
  kind: 'non-destructive' as Kind,
  bodyId: '',
  headerId: '',
  id: '',
  tech: '' as Tech,
}

// Public

export function getDefaultAlertDialogOptions(options?: AlertDialogOptions) {
  return {
    bodyId: options?.bodyId ?? defaultAlertDialogOptions.bodyId,
    headerId: options?.headerId ?? defaultAlertDialogOptions.headerId,
    id: options?.id ?? defaultAlertDialogOptions.id,
    kind: options?.kind ?? defaultAlertDialogOptions.kind,
    tech: options?.tech ?? defaultAlertDialogOptions.tech,
  }
}

export function createAlertDialogProps(options: AlertDialogOptions) {
  const { bodyId, headerId } = options

  return {
    cancelBtnOptions: {
      kind: 'weak',
    },
    primaryBtnOptions: {
      kind: 'medium',
    },
    alertTitle: {
      id: headerId,
    },
    alertBody: {
      id: bodyId,
    },
    backdrop: {},
    buttonGroup: {},
    cancelButton: {},
    container: {
      tabIndex: -1,
    },
    focusGuard: {
      ['data-aria-hidden']: true,
      ['data-focus-guard']: true,
      tabIndex: 0,
    },
    section: {
      ['aria-modal']: true,
      ['aria-describedby']: bodyId,
      ['aria-labelledby']: headerId,
      id: options.id,
      role: 'alertdialog',
      tabIndex: -1,
    },
    wrapper: {
      ['data-focus-lock-disabled']: false,
    },
  }
}

export function createAlertDialogSelectorClasses(kind: Kind) {
  return {
    kindClass: `${kind}Dialog`,
  }
}
