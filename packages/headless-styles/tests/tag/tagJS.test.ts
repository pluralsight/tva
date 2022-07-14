import { getJSTagProps, getJSTagWithIconProps } from '../../src'

describe('Tag JS', () => {
  describe('getJSTagProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSTagProps().cssProps).toContain('font-size: 0.875rem')
      expect(getJSTagProps().styles.fontSize).toEqual('0.875rem')
    })

    test('should accept a kind type', () => {
      expect(getJSTagProps({ kind: 'weak' }).cssProps).toContain(
        'background-color: hsl(238deg 30% 32% / 100%)'
      )
      expect(getJSTagProps({ kind: 'weak' }).styles.backgroundColor).toEqual(
        'hsl(238deg 30% 32% / 100%)'
      )
      expect(getJSTagProps({ kind: 'strong' }).cssProps).toContain(
        'background-color: hsl(249deg 63% 25% / 100%)'
      )
      expect(getJSTagProps({ kind: 'strong' }).styles.backgroundColor).toEqual(
        'hsl(249deg 63% 25% / 100%)'
      )
    })

    test('should accept a size type', () => {
      expect(getJSTagProps({ size: 's' }).cssProps).toContain('height: 1.25rem')
      expect(getJSTagProps({ size: 's' }).styles.height).toEqual('1.25rem')
      expect(getJSTagProps({ size: 'm' }).cssProps).toContain('height: 1.5rem')
      expect(getJSTagProps({ size: 'm' }).styles.height).toEqual('1.5rem')
    })
  })

  describe('getJSTagWithIconProps', () => {
    test('should return options for a corresponding icon size', () => {
      expect(getJSTagWithIconProps({ size: 's' }).iconOptions).toEqual({
        size: 's',
        tech: '',
      })
      expect(getJSTagWithIconProps({ size: 'm' }).iconOptions).toEqual({
        size: 'm',
        tech: '',
      })
    })
  })
})
