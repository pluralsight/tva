import { Tech } from '../types'

export interface AlertOptions {
  kind: Kind
  tech: Tech
}

// Types

export type Kind = 'info' | 'success' | 'warning' | 'danger'
