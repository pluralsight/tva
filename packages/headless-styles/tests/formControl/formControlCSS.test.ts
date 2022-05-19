import { getFormControlProps } from '../../src'

describe('FormControl CSS', () => {
  describe('getFormControlProps', () => {
    const baseClass = 'ps-form-control'
    const result = {
      control: {
        role: 'group',
        className: `${baseClass} formControlBase`,
      },
      fieldOptions: {
        disabled: false,
        invalid: false,
        readOnly: false,
        required: false,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getFormControlProps()).toEqual(result)
    })

    test('should accept a disabled type', () => {
      expect(getFormControlProps({ disabled: true })).toEqual({
        ...result,
        fieldOptions: {
          ...result.fieldOptions,
          disabled: true,
        },
      })
    })

    test('should accept a invalid type', () => {
      expect(getFormControlProps({ invalid: true })).toEqual({
        ...result,
        fieldOptions: {
          ...result.fieldOptions,
          invalid: true,
        },
      })
    })

    test('should accept a readOnly type', () => {
      expect(getFormControlProps({ readOnly: true })).toEqual({
        ...result,
        fieldOptions: {
          ...result.fieldOptions,
          readOnly: true,
        },
      })
    })

    test('should accept a required type', () => {
      expect(getFormControlProps({ required: true })).toEqual({
        ...result,
        fieldOptions: {
          ...result.fieldOptions,
          required: true,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getFormControlProps({ tech: 'svelte' })).toEqual({
        ...result,
        control: {
          role: result.control.role,
          class: result.control.className,
        },
      })
    })
  })
})
