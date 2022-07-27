import type { Tech } from '../types'
import type { TextLinkOptions } from './types'

export const defaultTextLinkOptions = {
  tech: '' as Tech,
}

export function getDefaultTextLinkOptions(options?: TextLinkOptions) {
  return {
    tech: options?.tech ?? defaultTextLinkOptions.tech,
  }
}

export function createTextLinkProps() {
  return {
    link: {},
    iconOptions: {
      customSize: '1em',
    },
  }
}
