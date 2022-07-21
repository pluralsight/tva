import { getAlertDialogProps } from '../../src'

describe('Alert Dialog CSS', () => {
  describe('getAlertDialogProps', () => {
    const baseClass = 'ps-alert-dialog'
    const result = {
      cancelBtnOptions: {
        kind: 'weak',
      },
      primaryBtnOptions: {
        kind: 'medium',
      },
      alertTitle: {
        id: '',
        className: `${baseClass}-title alertDialogTitle`,
      },
      alertBody: {
        id: '',
        className: `${baseClass}-body alertDialogBody`,
      },
      backdrop: {
        className: `${baseClass}-backdrop alertDialogBackdrop`,
      },
      buttonGroup: {
        className: `${baseClass}-btn-group alertDialogBtnGroup`,
      },
      cancelButton: {
        className: `${baseClass}-cancel alertDialogCancelBtn`,
      },
      focusGuard: {
        ['data-aria-hidden']: true,
        ['data-focus-guard']: true,
        tabIndex: 0,
        className: `${baseClass}-focus-guard alertFocusGuard`,
      },
      section: {
        ['aria-modal']: true,
        ['aria-describedby']: '',
        ['aria-labelledby']: '',
        id: '',
        role: 'alertdialog',
        tabIndex: -1,
        className: `${baseClass}-section alertDialogSection`,
      },
      wrapper: {
        ['data-focus-lock-disabled']: false,
        tabIndex: -1,
        className: `${baseClass} alertDialogWrapper`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getAlertDialogProps()).toEqual(result)
    })

    test('should accept a non-destructive kind type', () => {
      expect(
        getAlertDialogProps({
          kind: 'non-destructive',
          id: 'nd-test',
          headerId: 'nd-header-test',
          bodyId: 'nd-body-test',
        })
      ).toEqual({
        ...result,
        alertBody: {
          ...result.alertBody,
          id: 'nd-body-test',
        },
        alertTitle: {
          ...result.alertTitle,
          id: 'nd-header-test',
        },
        section: {
          ...result.section,
          ['aria-describedby']: 'nd-body-test',
          ['aria-labelledby']: 'nd-header-test',
          id: 'nd-test',
        },
      })
    })

    test('should accept a destructive kind type', () => {
      expect(
        getAlertDialogProps({
          kind: 'destructive',
          id: 'test',
          headerId: 'header-test',
          bodyId: 'body-test',
        })
      ).toEqual({
        ...result,
        alertBody: {
          ...result.alertBody,
          id: 'body-test',
        },
        alertTitle: {
          ...result.alertTitle,
          id: 'header-test',
        },
        section: {
          ...result.section,
          ['aria-describedby']: 'body-test',
          ['aria-labelledby']: 'header-test',
          id: 'test',
        },
      })
    })

    test('should accept a tech type', () => {
      expect(
        getAlertDialogProps({
          id: '',
          headerId: '',
          bodyId: '',
          tech: 'svelte',
        })
      ).toEqual({
        cancelBtnOptions: {
          ...result.cancelBtnOptions,
        },
        primaryBtnOptions: {
          ...result.primaryBtnOptions,
        },
        alertTitle: {
          id: '',
          class: `${baseClass}-title alertDialogTitle`,
        },
        alertBody: {
          id: '',
          class: `${baseClass}-body alertDialogBody`,
        },
        backdrop: {
          class: `${baseClass}-backdrop alertDialogBackdrop`,
        },
        buttonGroup: {
          class: `${baseClass}-btn-group alertDialogBtnGroup`,
        },
        cancelButton: {
          class: `${baseClass}-cancel alertDialogCancelBtn`,
        },
        focusGuard: {
          ['data-aria-hidden']: true,
          ['data-focus-guard']: true,
          tabIndex: 0,
          class: `${baseClass}-focus-guard alertFocusGuard`,
        },
        section: {
          ['aria-modal']: true,
          ['aria-describedby']: '',
          ['aria-labelledby']: '',
          id: '',
          role: 'alertdialog',
          tabIndex: -1,
          class: `${baseClass}-section alertDialogSection`,
        },
        wrapper: {
          ['data-focus-lock-disabled']: false,
          tabIndex: -1,
          class: `${baseClass} alertDialogWrapper`,
        },
      })
    })
  })
})
