import { getJSSwitchProps } from '../../src'
import type { SwitchOptions } from '../../src/types'

describe('Badge JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSSwitchProps().switchThumb.cssProps).toContain('height: 1.25rem')
    expect(getJSSwitchProps().switchThumb.styles.height).toEqual('1.25rem')
    expect(getJSSwitchProps().switchThumb.cssProps).toContain('width: 1.25rem')
    expect(getJSSwitchProps().switchThumb.styles.width).toEqual('1.25rem')
  })

  test('should accept a small size type', () => {
    const options = {
      checked: 'false',
      htmlFor: 'email',
      size: 's',
    } as SwitchOptions
    expect(getJSSwitchProps(options).switchThumb.cssProps).toContain(
      'height: 0.75rem'
    )
    expect(getJSSwitchProps(options).switchThumb.styles.height).toEqual(
      '0.75rem'
    )
    expect(getJSSwitchProps(options).switchThumb.cssProps).toContain(
      'width: 0.75rem'
    )
    expect(getJSSwitchProps(options).switchThumb.styles.width).toEqual(
      '0.75rem'
    )
  })

  test('should accept a medium size type', () => {
    expect(getJSSwitchProps().switchThumb.cssProps).toContain('height: 1.25rem')
    expect(getJSSwitchProps().switchThumb.styles.height).toEqual('1.25rem')
    expect(getJSSwitchProps().switchThumb.cssProps).toContain('width: 1.25rem')
    expect(getJSSwitchProps().switchThumb.styles.width).toEqual('1.25rem')
  })
})
