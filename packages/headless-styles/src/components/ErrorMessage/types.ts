import type { Tech } from '../types'

export interface ErrorMessageOptions {
  id: string
  invalid: boolean
  message: string
  tech?: Tech
}
