import type { Tech } from '../types'
import type { TextLinkOptions } from './types'

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

function getRel(href: string) {
  return isExternalHref(href) ? 'noopener external' : ''
}

export const defaultTextLinkOptions = {
  href: '',
  tech: '' as Tech,
}

export function getDefaultTextLinkOptions(options?: TextLinkOptions) {
  return {
    href: options?.href ?? defaultTextLinkOptions.href,
    tech: options?.tech ?? defaultTextLinkOptions.tech,
  }
}

export function createTextLinkProps(href: string, tech: Tech) {
  return {
    link: {
      href: href,
      rel: getRel(href),
    },
    iconOptions: {
      ariaHidden: true,
      customSize: '1em',
      tech: tech,
    },
  }
}
