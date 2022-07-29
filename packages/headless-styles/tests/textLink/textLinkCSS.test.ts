import { getTextLinkProps } from '../../src'

describe('Text Link CSS - getTextLinkProps', () => {
  const baseClass = 'ps-text-link'
  const defaultResult = {
    link: {
      className: `${baseClass} textLinkBase`,
      href: '',
      rel: '',
    },
    iconOptions: {
      ariaHidden: true,
      customSize: '1em',
      tech: '',
    },
  }

  test('should accept a tech type', () => {
    expect(getTextLinkProps({ href: '#top', tech: 'svelte' })).toEqual({
      ...defaultResult,
      link: {
        class: 'textLinkBase',
        href: '#top',
        rel: '',
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        tech: 'svelte',
      },
    })
  })

  test('should accept a relative href', () => {
    expect(getTextLinkProps({ href: 'index.html' })).toEqual({
      ...defaultResult,
      link: {
        ...defaultResult.link,
        href: 'index.html',
      },
    })
  })

  test('should accept an external href', () => {
    expect(getTextLinkProps({ href: 'https://www.pluralsight.com' })).toEqual({
      ...defaultResult,
      link: {
        ...defaultResult.link,
        href: 'https://www.pluralsight.com',
        rel: 'noopener external',
      },
    })
  })
})
