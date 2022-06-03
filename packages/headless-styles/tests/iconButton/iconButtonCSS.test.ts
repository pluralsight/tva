import { getIconButtonProps } from '../../src'

describe('Icon Button CSS', () => {
  describe('getIconButtonProps', () => {
    const baseClass = 'ps-icon-btn'
    const result = {
      button: {
        'aria-label': 'button',
        className: `ps-btn text m ${baseClass} mIconButton defaultIconButton`,
        type: 'button',
      },
      iconOptions: {
        size: 'm',
        ariaHidden: 'true',
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
          className: `ps-btn textWeak m ${baseClass} mIconButton defaultIconButton`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', kind: 'weak' })).toEqual(
        {
          button: {
            ...result.button,
            className: `ps-btn weak m ${baseClass} mIconButton defaultIconButton`,
          },
          iconOptions: result.iconOptions,
        }
      )
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'medium' })
      ).toEqual({
        button: {
          ...result.button,
          className: `ps-btn medium m ${baseClass} mIconButton defaultIconButton`,
        },
        iconOptions: result.iconOptions,
      })
      expect(
        getIconButtonProps({ ariaLabel: 'button', kind: 'strong' })
      ).toEqual({
        button: {
          ...result.button,
          className: `ps-btn strong m ${baseClass} mIconButton defaultIconButton`,
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
          className: `ps-btn text xs ${baseClass} xsIconButton defaultIconButton`,
        },
        iconOptions: {
          ...result.iconOptions,
          size: 's',
        },
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 's' })).toEqual({
        button: {
          ...result.button,
          className: `ps-btn text s ${baseClass} sIconButton defaultIconButton`,
        },
        iconOptions: result.iconOptions,
      })
      expect(getIconButtonProps({ ariaLabel: 'button', size: 'l' })).toEqual({
        button: {
          ...result.button,
          className: `ps-btn text l ${baseClass} lIconButton defaultIconButton`,
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
          class: 'base text m baseIconButton mIconButton defaultIconButton',
        },
        iconOptions: result.iconOptions,
      })
    })

    test('should accept a variant', () => {
      expect(
        getIconButtonProps({ ariaLabel: 'button', variant: 'round' })
      ).toEqual({
        button: {
          ...result.button,
          className: `ps-btn text m ${baseClass} mIconButton roundIconButton`,
        },
        iconOptions: result.iconOptions,
      })
    })
  })
})
