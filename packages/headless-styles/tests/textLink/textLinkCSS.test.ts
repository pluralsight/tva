import { getTextLinkProps } from '../../src'

describe('Text Link CSS - getTextLinkProps', () => {
  const baseClass = 'ps-text-link'
  const defaultResult = {
    link: {
      className: `${baseClass} baseTextLink`,
      href: '',
      rel: '',
    },
    iconOptions: {
      ariaHidden: true,
      customSize: '1em',
      tech: '',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getTextLinkProps()).toEqual(defaultResult)
  })

  test('should accept a tech type', () => {
    expect(getTextLinkProps({ tech: 'svelte' })).toEqual({
      ...defaultResult,
      link: {
        class: 'baseTextLink',
        href: '',
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
