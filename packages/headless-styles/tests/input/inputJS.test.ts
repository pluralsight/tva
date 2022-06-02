import { getJSInputProps } from '../../src'
import type { InputOptions } from '../../src/types'

describe('Input JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSInputProps().cssProps).toContain('height: 2.5rem')
    expect(getJSInputProps().styles.height).toEqual('2.5rem')
  })

  test('should accept a medium size type', () => {
    const options = {
      size: 'm',
    } as InputOptions
    expect(getJSInputProps(options).cssProps).toContain('height: 2rem')
    expect(getJSInputProps(options).styles.height).toEqual('2rem')
  })

  test('should accept a large size type', () => {
    expect(getJSInputProps().cssProps).toContain('height: 2.5rem')
    expect(getJSInputProps().styles.height).toEqual('2.5rem')
  })
})
