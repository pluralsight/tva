import { getSwitchProps } from '../../src'

describe('Switch CSS', () => {
  describe('getSwitchProps', () => {
    const baseClass = 'ps-switch'
    const options = {
      htmlFor: 'email',
      checked: 'false' as 'false',
    }
    const result = {
      input: {
        'aria-disabled': 'false',
        'aria-invalid': 'false',
        id: '',
        type: 'checkbox',
        className: `${baseClass}-input input`,
      },
      label: {
        htmlFor: '',
        className: `${baseClass}-label mLabel`,
      },
      switchContainer: {
        className: `${baseClass}-container container`,
      },
      switchTrack: {
        'aria-hidden': 'true',
        'data-checked': options.checked,
        'data-disabled': 'false',
        className: `${baseClass}-track mTrack`,
      },
      switchThumb: {
        'data-checked': options.checked,
        'data-disabled': 'false',
        className: `${baseClass}-thumb thumb`,
      },
      wrapper: {
        role: 'group',
        className: `${baseClass} base`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getSwitchProps()).toEqual(result)
    })

    test('should accept a size type', () => {
      expect(getSwitchProps({ ...options, size: 'm' })).toEqual({
        ...result,
        input: {
          ...result.input,
          id: options.htmlFor,
        },
        label: {
          ...result.label,
          htmlFor: options.htmlFor,
        },
      })
      expect(getSwitchProps({ ...options, size: 's' })).toEqual({
        ...result,
        input: {
          ...result.input,
          id: options.htmlFor,
        },
        label: {
          ...result.label,
          htmlFor: options.htmlFor,
          className: `${baseClass}-label sLabel`,
        },
        switchTrack: {
          ...result.switchTrack,
          className: `${baseClass}-track sTrack`,
        },
        switchThumb: {
          ...result.switchThumb,
          className: `${baseClass}-thumb thumb`,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getSwitchProps({ ...options, tech: 'svelte' })).toEqual({
        ...result,
        input: {
          'aria-disabled': 'false',
          'aria-invalid': 'false',
          type: 'checkbox',
          id: options.htmlFor,
          class: `${baseClass}-input input`,
        },
        label: {
          for: options.htmlFor,
          class: `${baseClass}-label label mLabel`,
        },
        switchContainer: {
          class: `${baseClass}-container container`,
        },
        switchTrack: {
          'aria-hidden': 'true',
          'data-checked': options.checked,
          'data-disabled': 'false',
          class: `${baseClass}-track track mTrack`,
        },
        switchThumb: {
          'data-checked': options.checked,
          'data-disabled': 'false',
          class: `${baseClass}-thumb thumb`,
        },
        wrapper: {
          role: 'group',
          class: `${baseClass} base`,
        },
      })
    })
  })
})
