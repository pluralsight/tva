import type { Tech } from '../types'
import type { AlertOptions, Kind } from './types'

const defaultAlertOptions = {
  kind: 'info' as Kind,
  tech: '' as Tech,
}

export function getDefaultAlertOptions(options?: AlertOptions) {
  return {
    kind: options?.kind ?? defaultAlertOptions.kind,
    tech: options?.tech ?? defaultAlertOptions.tech,
  }
}

export function createAlertProps() {
  return {
    iconButtonOptions: {
      ariaLabel: 'Close alert',
      kind: 'text',
      size: 'm',
    },
    iconOptions: {
      size: 'm',
    },
    description: {},
    iconWrapper: {},
    textContainer: {},
    title: {},
    wrapper: {
      role: 'alert',
    },
  }
}
