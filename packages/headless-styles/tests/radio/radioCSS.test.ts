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
    const dataPropResults = {
      'data-checked': false,
      'data-disabled': false,
      'data-invalid': false,
      'data-readonly': false,
      'data-required': false,
    }
    const result = {
      input: {
        'aria-invalid': false,
        checked: false,
        disabled: false,
        id: '',
        name: '',
        readOnly: false,
        required: false,
        type: 'radio',
        value: '',
        className: `${baseClass}-input radioInput`,
      },
      radioContainer: {
        ...dataPropResults,
        className: `${baseClass}-container radioContainer radiorow`,
      },
      radioControl: {
        ...dataPropResults,
        'aria-hidden': true,
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
          'aria-invalid': false,
          checked: options.checked,
          disabled: false,
          id: options.id,
          name: options.name,
          readOnly: false,
          required: false,
          type: 'radio',
          value: options.value,
          class: `${baseClass}-input radioInput`,
        },
        radioContainer: {
          ...dataPropResults,
          class: `${baseClass}-container radioContainer radiorow`,
        },
        radioControl: {
          ...dataPropResults,
          'aria-hidden': true,
          class: `${baseClass}-control radioControl`,
        },
      })
    })
  })
})
