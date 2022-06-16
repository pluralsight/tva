import { getSwitchProps } from '../../src'

describe('Switch CSS', () => {
  describe('getSwitchProps', () => {
    const baseClass = 'ps-switch'
    const options = {
      id: 'email',
      checked: false,
    }
    const dataPropResults = {
      'data-checked': options.checked,
      'data-disabled': false,
      'data-invalid': false,
      'data-readonly': false,
      'data-required': false,
    }
    const result = {
      input: {
        'aria-invalid': false,
        disabled: false,
        id: '',
        name: '',
        type: 'checkbox',
        readOnly: false,
        required: false,
        className: `${baseClass}-input input`,
      },
      switchContainer: {
        className: `${baseClass}-container container`,
      },
      switchTrack: {
        ...dataPropResults,
        'aria-hidden': 'true',
        className: `${baseClass}-track mTrack`,
      },
      switchThumb: {
        ...dataPropResults,
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
          'aria-invalid': false,
          disabled: false,
          id: options.id,
          name: '',
          readOnly: false,
          required: false,
          type: 'checkbox',
          class: `${baseClass}-input input`,
        },
        switchContainer: {
          class: `${baseClass}-container container`,
        },
        switchTrack: {
          ...dataPropResults,
          'aria-hidden': 'true',
          class: `${baseClass}-track track mTrack`,
        },
        switchThumb: {
          ...dataPropResults,
          class: `${baseClass}-thumb thumb`,
        },
      })
    })
  })
})
