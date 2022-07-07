import { getAlertProps } from '../../src'

describe('Alert CSS', () => {
  describe('getAlertProps', () => {
    const baseClass = 'ps-alert'
    const result = {
      iconButtonOptions: {
        ariaLabel: 'Close alert',
        kind: 'text',
        size: 'm',
      },
      iconOptions: {
        size: 'm',
      },
      description: {
        className: `${baseClass}-description alertDescription`,
      },
      iconWrapper: {
        className: `${baseClass}-icon alertIconWrapper`,
      },
      textContainer: {
        className: `${baseClass}-text-container alertTextContainer`,
      },
      title: {
        className: `${baseClass}-title alertTitle`,
      },
      wrapper: {
        className: `${baseClass} infoAlert`,
        role: 'alert',
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getAlertProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getAlertProps({ kind: 'info' })).toEqual(result)
    })

    test('should accept a tech type', () => {
      expect(getAlertProps({ tech: 'svelte' })).toEqual({
        iconButtonOptions: {
          ariaLabel: 'Close alert',
          kind: 'text',
          size: 'm',
        },
        iconOptions: {
          size: 'm',
        },
        description: {
          class: `${baseClass}-description alertDescription`,
        },
        iconWrapper: {
          class: `${baseClass}-icon alertIconWrapper`,
        },
        textContainer: {
          class: `${baseClass}-text-container alertTextContainer`,
        },
        title: {
          class: `${baseClass}-title alertTitle`,
        },
        wrapper: {
          class: `${baseClass} infoAlert`,
          role: 'alert',
        },
      })
    })
  })
})
