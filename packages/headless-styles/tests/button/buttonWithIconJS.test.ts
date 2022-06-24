import {
  getJSDangerButtonWithIconProps,
  getJSButtonWithIconProps,
} from '../../src'

describe('JS Icon Button', () => {
  describe('getJSButtonWithIconProps', () => {
    test('should allow no props to be passed in', () => {
      const iconButtonReturn = getJSButtonWithIconProps()
      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a textWeak kind type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        kind: 'textWeak',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a weak kind type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        kind: 'weak',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a medium kind type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        kind: 'medium',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a strong kind type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        kind: 'strong',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a xs size type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        size: 'xs',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a small size type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        size: 's',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a medium size type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        size: 'm',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a large size type', () => {
      const iconButtonReturn = getJSButtonWithIconProps({
        size: 'l',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })
  })

  describe('getJSDangerButtonWithIconProps', () => {
    test('should allow no props to be passed in', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps()
      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a text kind type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        kind: 'text',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a medium kind type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        kind: 'medium',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a strong kind type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        kind: 'strong',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a xs size type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        size: 'xs',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a small size type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        size: 's',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a medium size type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        size: 'm',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })

    test('should accept a large size type', () => {
      const iconButtonReturn = getJSDangerButtonWithIconProps({
        size: 'l',
      })

      expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
      expect(iconButtonReturn.button.styles).toBeDefined()
      expect(iconButtonReturn.button.type).toEqual('button')
      expect(iconButtonReturn.iconOptions).toBeDefined()
    })
  })
})
