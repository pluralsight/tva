import { Tech } from '../types'

export interface AlertDialogOptions {
  kind?: Kind
  id: string
  headerId: string
  bodyId: string
  tech?: Tech
}

// types

export type Kind = 'non-destructive' | 'destructive'
