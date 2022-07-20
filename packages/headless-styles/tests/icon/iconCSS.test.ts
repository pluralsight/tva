import { getIconProps } from '../../src'

describe('Icon CSS', () => {
  describe('getIconProps', () => {
    const baseClass = 'ps-icon'
    const result = {
      className: `${baseClass} mIconSize`,
      role: 'img',
      'aria-hidden': false,
    }

    test('should allow no props to be passed in', () => {
      expect(getIconProps()).toEqual(result)
    })

    test('should accept a size type', () => {
      expect(getIconProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} sIconSize`,
      })
      expect(getIconProps({ size: 'm' })).toEqual(result)
      expect(getIconProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} lIconSize`,
      })
    })

    test('should accept a custom size', () => {
      expect(getIconProps({ customSize: '5rem' })).toEqual({
        ...result,
        style: {
          height: '5rem',
          width: '5rem',
        },
      })
    })

    test('should accept a tech type', () => {
      const { className, ...svelteResult } = result

      expect(getIconProps({ tech: 'svelte' })).toEqual({
        ...svelteResult,
        class: `ps-icon psIcon mIconSize`,
      })
    })

    test('should accept an ariaLabel', () => {
      expect(getIconProps({ ariaLabel: 'my label' })).toEqual({
        ...result,
        'aria-label': 'my label',
      })
    })

    test('should accept an ariaHidden flag', () => {
      expect(getIconProps({ ariaHidden: true })).toEqual({
        ...result,
        'aria-hidden': true,
      })
      expect(getIconProps({ ariaHidden: false })).toEqual({
        ...result,
        'aria-hidden': false,
      })
    })
  })
})
