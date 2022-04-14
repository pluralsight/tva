import { getButtonProps } from '../../src'

describe('Button CSS', () => {
  describe('getButtonProps', () => {
    const baseClass = 'ps-btn base'
    const result = {
      className: `${baseClass} text size-m `,
      rawClass: 'base text size-m ',
      type: 'button',
    }

    test('should allow no props to be passed in', () => {
      expect(getButtonProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getButtonProps({ kind: 'text' })).toEqual(result)
      expect(getButtonProps({ kind: 'text-weak' })).toEqual({
        ...result,
        className: `${baseClass} text-weak size-m `,
        rawClass: 'base text-weak size-m ',
      })
      expect(getButtonProps({ kind: 'weak' })).toEqual({
        ...result,
        className: `${baseClass} weak size-m `,
        rawClass: 'base weak size-m ',
      })
      expect(getButtonProps({ kind: 'medium' })).toEqual({
        ...result,
        className: `${baseClass} medium size-m `,
        rawClass: 'base medium size-m ',
      })
      expect(getButtonProps({ kind: 'strong' })).toEqual({
        ...result,
        className: `${baseClass} strong size-m `,
        rawClass: 'base strong size-m ',
      })
    })

    test('should accept a size type', () => {
      expect(getButtonProps({ size: 'm' })).toEqual(result)
      expect(getButtonProps({ size: 'xs' })).toEqual({
        ...result,
        className: `${baseClass} text size-xs `,
        rawClass: 'base text size-xs ',
      })
      expect(getButtonProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} text size-s `,
        rawClass: 'base text size-s ',
      })
      expect(getButtonProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} text size-l `,
        rawClass: 'base text size-l ',
      })
    })

    test('should accept a tech type', () => {
      expect(getButtonProps({ tech: 'chakra' })).toEqual({
        ...result,
        className: `${baseClass} text size-m chakra`,
        rawClass: 'base text size-m chakra',
      })
    })
  })
})
