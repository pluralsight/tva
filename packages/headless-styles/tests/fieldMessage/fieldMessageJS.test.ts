import { getJSFieldMessageProps } from '../../src'

describe('FieldMessage JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSFieldMessageProps().message.value).toEqual('')
    expect(getJSFieldMessageProps().styles).toBeDefined()
  })
})
