import { getCheckboxProps } from '../../src'

describe('Checkbox CSS', () => {
  const baseClass = 'ps-checkbox'
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
    iconOptions: {
      size: 's',
    },
    input: {
      'aria-invalid': false,
      checked: false,
      disabled: false,
      id: '',
      name: '',
      readOnly: false,
      required: false,
      type: 'checkbox',
      value: '',
      className: `${baseClass}-input checkboxInput`,
    },
    checkboxContainer: {
      ...dataPropResults,
      className: `${baseClass}-container checkboxContainer checkboxrow`,
    },
    checkboxControl: {
      ...dataPropResults,
      'aria-hidden': true,
      className: `${baseClass}-control checkboxControl`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getCheckboxProps()).toEqual(result)
  })

  test('should accept a tech type', () => {
    expect(getCheckboxProps({ ...options, tech: 'svelte' })).toEqual({
      ...result,
      input: {
        'aria-invalid': false,
        checked: options.checked,
        disabled: false,
        id: options.id,
        name: options.name,
        readOnly: false,
        required: false,
        type: 'checkbox',
        value: options.value,
        class: `${baseClass}-input checkboxInput`,
      },
      checkboxContainer: {
        ...dataPropResults,
        class: `${baseClass}-container checkboxContainer checkboxrow`,
      },
      checkboxControl: {
        ...dataPropResults,
        'aria-hidden': true,
        class: `${baseClass}-control checkboxControl`,
      },
    })
  })
})
