import { getButtonProps, getDangerButtonProps } from '../../src'

describe('Button CSS', () => {
  describe('getButtonProps', () => {
    const baseClass = 'ps-btn'
    const result = {
      className: `${baseClass} text m`,
      type: 'button',
    }

    test('should allow no props to be passed in', () => {
      expect(getButtonProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getButtonProps({ kind: 'text' })).toEqual(result)
      expect(getButtonProps({ kind: 'textWeak' })).toEqual({
        ...result,
        className: `${baseClass} textWeak m`,
      })
      expect(getButtonProps({ kind: 'weak' })).toEqual({
        ...result,
        className: `${baseClass} weak m`,
      })
      expect(getButtonProps({ kind: 'medium' })).toEqual({
        ...result,
        className: `${baseClass} medium m`,
      })
      expect(getButtonProps({ kind: 'strong' })).toEqual({
        ...result,
        className: `${baseClass} strong m`,
      })
    })

    test('should accept a size type', () => {
      expect(getButtonProps({ size: 'm' })).toEqual(result)
      expect(getButtonProps({ size: 'xs' })).toEqual({
        ...result,
        className: `${baseClass} text xs`,
      })
      expect(getButtonProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} text s`,
      })
      expect(getButtonProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} text l`,
      })
    })

    test('should accept a tech type', () => {
      expect(getButtonProps({ tech: 'svelte' })).toEqual({
        class: 'base text m',
      })
    })
  })

  describe('getDangerButtonProps', () => {
    const dangerBase = 'ps-danger-btn'
    const result = {
      className: `${dangerBase} textDanger m`,
      type: 'button',
    }

    test('should allow no props to be passed in', () => {
      expect(getDangerButtonProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getDangerButtonProps({ kind: 'text' })).toEqual(result)
      expect(getDangerButtonProps({ kind: 'medium' })).toEqual({
        ...result,
        className: `${dangerBase} mediumDanger m`,
      })
      expect(getDangerButtonProps({ kind: 'strong' })).toEqual({
        ...result,
        className: `${dangerBase} strongDanger m`,
      })
    })

    test('should accept a size type', () => {
      expect(getDangerButtonProps({ size: 'm' })).toEqual(result)
      expect(getDangerButtonProps({ size: 'xs' })).toEqual({
        ...result,
        className: `${dangerBase} textDanger xs`,
      })
      expect(getDangerButtonProps({ size: 's' })).toEqual({
        ...result,
        className: `${dangerBase} textDanger s`,
      })
      expect(getDangerButtonProps({ size: 'l' })).toEqual({
        ...result,
        className: `${dangerBase} textDanger l`,
      })
    })

    test('should accept a tech type', () => {
      expect(getDangerButtonProps({ tech: 'svelte' })).toEqual({
        class: 'base textDanger m',
      })
    })
  })
})
