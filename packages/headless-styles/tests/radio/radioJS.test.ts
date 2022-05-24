import { getJSRadioProps } from '../../src'

describe('Radio JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSRadioProps().radioContainer.cssProps).toContain(
      'align-items: center'
    )
    expect(getJSRadioProps().radioContainer.styles.alignItems).toEqual('center')
  })
})
