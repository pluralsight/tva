import { getRadioProps } from '../../src'

describe('Radio CSS', () => {
  describe('getRadioProps', () => {
    const baseClass = 'ps-radio'
    const options = {
      id: 'email',
      name: 'email-1',
      value: '1',
      checked: false,
    }
    const result = {
      input: {
        'aria-disabled': false,
        'aria-invalid': false,
        checked: false,
        disabled: false,
        id: '',
        name: '',
        type: 'radio',
        value: '',
        className: `${baseClass}-input radioInput`,
      },
      radioContainer: {
        'data-checked': false,
        'data-disabled': false,
        'data-invalid': false,
        'data-readonly': false,
        className: `${baseClass}-container radioContainer radiorow`,
      },
      radioControl: {
        'aria-hidden': 'true',
        'data-checked': false,
        'data-disabled': false,
        'data-invalid': false,
        'data-readonly': false,
        className: `${baseClass}-control radioControl`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getRadioProps()).toEqual(result)
    })

    test('should accept a tech type', () => {
      expect(getRadioProps({ ...options, tech: 'svelte' })).toEqual({
        ...result,
        input: {
          ...options,
          'aria-disabled': false,
          'aria-invalid': false,
          disabled: false,
          type: 'radio',
          class: `${baseClass}-input radioInput`,
        },
        radioContainer: {
          'data-checked': false,
          'data-disabled': false,
          'data-invalid': false,
          'data-readonly': false,
          class: `${baseClass}-container radioContainer radiorow`,
        },
        radioControl: {
          'aria-hidden': 'true',
          'data-checked': false,
          'data-disabled': false,
          'data-invalid': false,
          'data-readonly': false,
          class: `${baseClass}-control radioControl`,
        },
      })
    })
  })
})
