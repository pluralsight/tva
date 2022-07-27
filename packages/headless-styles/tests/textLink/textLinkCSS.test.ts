import { getTextLinkProps } from '../../src'

describe('Text Link CSS - getTextLinkProps', () => {
  const baseClass = 'ps-text-link'
  const defaultResult = {
    link: {
      className: `${baseClass} baseTextLink`,
    },
    iconOptions: {
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
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        tech: 'svelte',
      },
    })
  })
})
