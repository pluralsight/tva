import { getTagProps, getTagWithIconProps } from '../../src'

describe('Tag CSS', () => {
  describe('getTagProps', () => {
    const baseClass = 'ps-tag'
    const defaultResult = {
      className: `${baseClass} weakTag mTag`,
    }

    test('should allow no props to be passed in', () => {
      expect(getTagProps()).toEqual(defaultResult)
    })

    test('should accept a kind type', () => {
      expect(getTagProps({ kind: 'weak' })).toEqual(defaultResult)
      expect(getTagProps({ kind: 'strong' })).toEqual({
        ...defaultResult,
        className: `${baseClass} strongTag mTag`,
      })
    })

    test('should accept a size type', () => {
      expect(getTagProps({ size: 'm' })).toEqual(defaultResult)
      expect(getTagProps({ size: 's' })).toEqual({
        ...defaultResult,
        className: `${baseClass} weakTag sTag`,
      })
    })

    test('should accept a tech type', () => {
      expect(getTagProps({ tech: 'svelte' })).toEqual({
        class: 'baseTag weakTag mTag',
      })
    })
  })

  describe('getTagWithIconProps', () => {
    const defaultResult = {
      size: 'm',
      tech: '',
    }

    test('should return options for a corresponding icon size', () => {
      expect(getTagWithIconProps({ size: 'm' }).iconOptions).toEqual(
        defaultResult
      )
      expect(getTagWithIconProps({ size: 's' }).iconOptions).toEqual({
        size: 's',
        tech: '',
      })
    })

    test('should forward the tech type to the icon helper', () => {
      expect(getTagWithIconProps({ tech: 'svelte' }).iconOptions).toEqual({
        size: 'm',
        tech: 'svelte',
      })
    })
  })
})
