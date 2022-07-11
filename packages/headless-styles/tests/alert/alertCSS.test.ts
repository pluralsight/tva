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
        className: `${baseClass}-icon infoIconWrapper`,
      },
      textContainer: {
        className: `${baseClass}-text-container infoTextContainer`,
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

    test('should accept a info kind type', () => {
      expect(getAlertProps({ kind: 'info' })).toEqual(result)
    })

    test('should accept a success kind type', () => {
      expect(getAlertProps({ kind: 'success' })).toEqual({
        ...result,
        iconWrapper: {
          ...result.iconWrapper,
          className: `${baseClass}-icon successIconWrapper`,
        },
        textContainer: {
          ...result.textContainer,
          className: `${baseClass}-text-container successTextContainer`,
        },
        wrapper: {
          ...result.wrapper,
          className: `${baseClass} successAlert`,
        },
      })
    })

    test('should accept a warning kind type', () => {
      expect(getAlertProps({ kind: 'warning' })).toEqual({
        ...result,
        iconWrapper: {
          ...result.iconWrapper,
          className: `${baseClass}-icon warningIconWrapper`,
        },
        textContainer: {
          ...result.textContainer,
          className: `${baseClass}-text-container warningTextContainer`,
        },
        wrapper: {
          ...result.wrapper,
          className: `${baseClass} warningAlert`,
        },
      })
    })

    test('should accept a danger kind type', () => {
      expect(getAlertProps({ kind: 'danger' })).toEqual({
        ...result,
        iconWrapper: {
          ...result.iconWrapper,
          className: `${baseClass}-icon dangerIconWrapper`,
        },
        textContainer: {
          ...result.textContainer,
          className: `${baseClass}-text-container dangerTextContainer`,
        },
        wrapper: {
          ...result.wrapper,
          className: `${baseClass} dangerAlert`,
        },
      })
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
          class: `${baseClass}-icon alertIconWrapper infoIconWrapper`,
        },
        textContainer: {
          class: `${baseClass}-text-container alertTextContainer infoTextContainer`,
        },
        title: {
          class: `${baseClass}-title alertTitle`,
        },
        wrapper: {
          class: `${baseClass} alertWrapper infoAlert`,
          role: 'alert',
        },
      })
    })
  })
})
