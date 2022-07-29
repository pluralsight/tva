import type { Tech } from '../types'
import type { TextLinkOptions } from './types'

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

function getRel(href: string) {
  return isExternalHref(href) ? 'noopener external' : ''
}

function getTarget(href: string) {
  return isExternalHref(href) ? '_blank' : ''
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
  const rel = getRel(href)
  const target = getTarget(href)
  const relProps = rel && { rel: rel }
  const targetProps = target && { target: target }

  return {
    link: {
      href: href,
      ...relProps,
      ...targetProps,
    },
    iconOptions: {
      ariaHidden: false,
      ariaLabel: '(opens in a new window)',
      customSize: '1em',
      tech: tech,
    },
  }
}
