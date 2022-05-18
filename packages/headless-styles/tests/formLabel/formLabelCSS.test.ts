import { getFormLabelProps } from '../../src'

describe('FormLabel CSS', () => {
  describe('getFormLabelProps', () => {
    const baseClass = 'ps-form-label'
    const htmlFor = 'email'
    const result = {
      htmlFor: '',
      className: `${baseClass} base`,
    }

    test('should allow no props to be passed in', () => {
      expect(getFormLabelProps()).toEqual(result)
    })

    test('should accept a htmlFor option', () => {
      expect(getFormLabelProps({ htmlFor })).toEqual({
        ...result,
        htmlFor,
      })
    })

    test('should accept a tech type', () => {
      expect(getFormLabelProps({ htmlFor, tech: 'svelte' })).toEqual({
        for: htmlFor,
        class: `${baseClass} base`,
      })
    })
  })
})
