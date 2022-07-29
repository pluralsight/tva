import type { Tech } from '../types'
import type { TextLinkOptions } from './types'

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

function getLinkProps(href: string) {
  if (isExternalHref(href)) {
    return {
      rel: 'noopener external',
      target: '_blank',
    }
  }

  return {}
}

function getIconOptions(tech: Tech) {
  return {
    ariaHidden: false,
    ariaLabel: '(opens in a new window)',
    customSize: '1em',
    tech: tech,
  }
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
  const linkProps = getLinkProps(href)

  return {
    link: { href, ...linkProps },
    ...(isExternalHref(href) && { iconOptions: getIconOptions(tech) }),
  }
}
