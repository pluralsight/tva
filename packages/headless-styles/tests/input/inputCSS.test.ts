import { getInputProps } from '../../src'
import type { InputOptions } from '../../src/types'

describe('Input CSS', () => {
  describe('getInputProps', () => {
    const baseClass = 'ps-input'
    const options = {
      id: 'email',
      name: 'user-email',
      placeholder: 'Enter email',
      type: 'email',
      value: '',
    } as InputOptions
    const result = {
      ['aria-invalid']: false,
      ['data-disabled']: false,
      ['data-invalid']: false,
      ['data-readonly']: false,
      ['data-required']: false,
      disabled: false,
      id: options.id,
      name: options.name,
      placeholder: options.placeholder,
      readOnly: false,
      required: false,
      type: options.type,
      value: options.value,
      className: `${baseClass} lInputSize`,
    }

    test('should allow no props to be passed in', () => {
      expect(getInputProps()).toEqual({
        ...result,
        id: '',
        name: '',
        placeholder: 'Enter text',
        type: 'text',
      })
    })

    test('should accept a size type', () => {
      expect(getInputProps({ ...options, size: 'm' })).toEqual({
        ...result,
        className: `${baseClass} mInputSize`,
      })
      expect(getInputProps({ ...options, size: 'l' })).toEqual(result)
    })

    test('should accept a tech type', () => {
      expect(getInputProps({ ...options, tech: 'svelte' })).toEqual({
        ['aria-invalid']: false,
        ['data-disabled']: false,
        ['data-invalid']: false,
        ['data-readonly']: false,
        ['data-required']: false,
        disabled: false,
        id: options.id,
        name: options.name,
        placeholder: options.placeholder,
        readOnly: false,
        required: false,
        type: options.type,
        value: options.value,
        class: `${baseClass} inputBase lInputSize`,
      })
    })
  })
})
