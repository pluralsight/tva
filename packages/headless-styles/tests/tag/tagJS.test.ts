import {
  psNeutralBackground,
  psBackgroundWeak,
} from '@pluralsight/design-tokens'
import { getJSTagProps, getJSTagWithIconProps } from '../../src'

describe('Tag JS', () => {
  describe('getJSTagProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSTagProps().cssProps).toContain('font-size: 0.875rem')
      expect(getJSTagProps().styles.fontSize).toEqual('0.875rem')
    })

    test('should accept a weak kind type', () => {
      const bg = psNeutralBackground
      expect(getJSTagProps({ kind: 'weak' }).cssProps).toContain(
        `background-color: ${bg}`
      )
      expect(getJSTagProps({ kind: 'weak' }).styles.backgroundColor).toEqual(bg)
    })

    test('should accept a strong kind type', () => {
      const bg = psBackgroundWeak
      expect(getJSTagProps({ kind: 'strong' }).cssProps).toContain(
        `background-color: ${bg}`
      )
      expect(getJSTagProps({ kind: 'strong' }).styles.backgroundColor).toEqual(
        bg
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
        ariaHidden: true,
        size: 's',
        tech: '',
      })
      expect(getJSTagWithIconProps({ size: 'm' }).iconOptions).toEqual({
        ariaHidden: true,
        size: 'm',
        tech: '',
      })
    })
  })
})
