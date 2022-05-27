import { getJSErrorMessageProps } from '../../src'

describe('ErrorMessage JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSErrorMessageProps().container['aria-live']).toEqual('polite')
    expect(getJSErrorMessageProps().message.styles).toBeDefined()
  })
})
