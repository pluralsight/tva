import { getTextareaProps } from '../../src'

describe('Textarea CSS', () => {
  const baseClass = 'ps-textarea'
  const options = {
    id: 'test-id',
    name: 'test-name',
    placeholder: 'test placeholder',
    value: '',
  }
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
    value: options.value,
    className: `${baseClass} initialTextarea`,
  }

  test('should allow no props to be passed in', () => {
    expect(getTextareaProps()).toEqual({
      ...result,
      id: '',
      name: '',
      placeholder: 'Enter text',
    })
  })

  test('should accept a resize type', () => {
    expect(getTextareaProps({ ...options, resize: 'initial' })).toEqual(result)
    expect(getTextareaProps({ ...options, resize: 'horizontal' })).toEqual({
      ...result,
      className: `${baseClass} horizontalTextarea`,
    })
    expect(getTextareaProps({ ...options, resize: 'vertical' })).toEqual({
      ...result,
      className: `${baseClass} verticalTextarea`,
    })
    expect(getTextareaProps({ ...options, resize: 'none' })).toEqual({
      ...result,
      className: `${baseClass} noneTextarea`,
    })
  })

  test('should accept a tech type', () => {
    expect(getTextareaProps({ ...options, tech: 'svelte' })).toEqual({
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
      value: options.value,
      class: `${baseClass} textareaBase initialTextarea`,
    })
  })
})
