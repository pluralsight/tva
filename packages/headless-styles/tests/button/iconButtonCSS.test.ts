import { getIconButtonProps } from '../../src'

describe('Icon Button CSS', () => {
  describe('getIconButtonProps', () => {
    const baseClass = 'ps-icon-btn defaultIconButton'
    const result = {
      button: {
        'aria-label': 'button',
        className: `${baseClass} text m`,
        type: 'button',
      },
      iconOptions: {
        size: 'm',
        ariaHidden: true,
        tech: '',
      },
    }

    test('should accept an ariaLabel argument', () => {
      expect(getIconButtonProps({ ariaLabel: 'button' })).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getIconButtonProps({ ariaLabel: 'button', kind: 'text' })).toEqual(
        result
      )
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'textWeak' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} textWeak m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', kind: 'weak' })).toEqual(
        {
          button: {
            ...result.button,
            className: `${baseClass} weak m`,
          },
          iconOptions: result.iconOptions,
        }
      )
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'medium' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} medium m`,
        },
        iconOptions: result.iconOptions,
      })
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'strong' })
      ).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} strong m`,
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a size type', () => {
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'm' })).toEqual(
        result
      )
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'xs' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text xs`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 's',
        },
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 's' })).toEqual({
        button: {
          ...result.button,
          className: `${baseClass} text s`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'l' })).toEqual({
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
      expect(
        getIconButtonProps({ ariaLabel: 'button', tech: 'svelte' })
      ).toEqual({
        button: {
          'aria-label': 'button',
          type: 'button',
          class: 'base defaultIconButton text m',
        },
        iconOptions: { ...result.iconOptions, tech: 'svelte' },
      })
    })

    test('should accept a variant', () => {
      expect(
        getIconButtonProps({ ariaLabel: 'button', variant: 'round' })
      ).toEqual({
        button: {
          ...result.button,
          className: `ps-icon-btn roundIconButton text m`,
        },
        iconOptions: result.iconOptions,
      })
    })
  })
})
