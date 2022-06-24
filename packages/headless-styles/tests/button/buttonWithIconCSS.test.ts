import { getButtonWithIconProps, getDangerButtonWithIconProps } from '../../src'

describe('Button with icon CSS', () => {
  describe('getButtonWithIconProps', () => {
    const baseClass = 'ps-btn'
    const result = {
      button: {
        className: `${baseClass} text m`,
        type: 'button',
      },
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        size: 'm',
        tech: '',
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getButtonWithIconProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getButtonWithIconProps({ kind: 'text' })).toEqual(result)
      expect(getButtonWithIconProps({ kind: 'textWeak' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textWeak m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getButtonWithIconProps({ kind: 'weak' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} weak m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getButtonWithIconProps({ kind: 'medium' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} medium m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getButtonWithIconProps({ kind: 'strong' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} strong m`,
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a size type', () => {
      expect(getButtonWithIconProps({ size: 'm' })).toEqual(result)
      expect(getButtonWithIconProps({ size: 'xs' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text xs`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 's',
        },
      })
      expect(getButtonWithIconProps({ size: 's' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text s`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getButtonWithIconProps({ size: 'l' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text l`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 'l',
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getButtonWithIconProps({ tech: 'svelte' })).toEqual({
        button: {
          type: 'button',
          class: 'base text m',
        },
        iconOptions: { ...result.iconOptions, tech: 'svelte' },
      })
    })
  })

  describe('getDangerButtonWithIconProps', () => {
    const baseClass = 'ps-danger-btn'
    const result = {
      button: {
        className: `${baseClass} textDanger m`,
        type: 'button',
      },
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        size: 'm',
        tech: '',
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getDangerButtonWithIconProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getDangerButtonWithIconProps({ kind: 'text' })).toEqual(result)
      expect(getDangerButtonWithIconProps({ kind: 'medium' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} mediumDanger m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getDangerButtonWithIconProps({ kind: 'strong' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} strongDanger m`,
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a size type', () => {
      expect(getDangerButtonWithIconProps({ size: 'm' })).toEqual(result)
      expect(getDangerButtonWithIconProps({ size: 'xs' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textDanger xs`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 's',
        },
      })
      expect(getDangerButtonWithIconProps({ size: 's' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textDanger s`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getDangerButtonWithIconProps({ size: 'l' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textDanger l`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 'l',
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getDangerButtonWithIconProps({ tech: 'svelte' })).toEqual({
        button: {
          type: 'button',
          class: 'base textDanger m',
        },
        iconOptions: { ...result.iconOptions, tech: 'svelte' },
      })
    })
  })
})
