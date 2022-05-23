import { getSwitchProps } from '../../src'

describe('Switch CSS', () => {
  describe('getSwitchProps', () => {
    const baseClass = 'ps-switch'
    const options = {
      id: 'email',
      checked: false,
    }
    const result = {
      input: {
        'aria-disabled': false,
        'aria-invalid': false,
        disabled: false,
        id: '',
        type: 'checkbox',
        className: `${baseClass}-input input`,
      },
      switchContainer: {
        className: `${baseClass}-container container`,
      },
      switchTrack: {
        'aria-hidden': 'true',
        'data-checked': options.checked,
        'data-disabled': false,
        'data-invalid': false,
        className: `${baseClass}-track mTrack`,
      },
      switchThumb: {
        'data-checked': options.checked,
        'data-disabled': false,
        'data-invalid': false,
        className: `${baseClass}-thumb thumb`,
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
          id: options.id,
        },
      })
      expect(getSwitchProps({ ...options, size: 's' })).toEqual({
        ...result,
        input: {
          ...result.input,
          id: options.id,
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
          'aria-disabled': false,
          'aria-invalid': false,
          disabled: false,
          type: 'checkbox',
          id: options.id,
          class: `${baseClass}-input input`,
        },
        switchContainer: {
          class: `${baseClass}-container container`,
        },
        switchTrack: {
          'aria-hidden': 'true',
          'data-checked': options.checked,
          'data-disabled': false,
          'data-invalid': false,
          class: `${baseClass}-track track mTrack`,
        },
        switchThumb: {
          'data-checked': options.checked,
          'data-disabled': false,
          'data-invalid': false,
          class: `${baseClass}-thumb thumb`,
        },
      })
    })
  })
})
