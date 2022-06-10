import { getJSCheckboxProps } from '../../src'

describe('Checkbox JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSCheckboxProps().checkboxContainer.cssProps).toContain(
      'align-items: center'
    )
    expect(getJSCheckboxProps().checkboxContainer.styles.alignItems).toEqual(
      'center'
    )
  })
})
