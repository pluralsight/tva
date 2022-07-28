import { getJSAlertProps } from '../../src'
import type { AlertOptions } from '../../src/types'

describe('Alert JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSAlertProps().wrapper.cssProps).toContain(
      'align-items: flex-start'
    )
    expect(getJSAlertProps().wrapper.styles.alignItems).toEqual('flex-start')
  })

  test('should accept a info info kind option', () => {
    const infoOptions = { kind: 'info' } as AlertOptions
    const bg = 'hsl(202deg 100% 17% / 100%)'
    expect(getJSAlertProps(infoOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(infoOptions).wrapper.styles.background).toEqual(bg)
  })

  test('should accept a success kind option', () => {
    const successOptions = { kind: 'success' } as AlertOptions
    const bg = 'hsl(156deg 97% 15% / 100%)'
    expect(getJSAlertProps(successOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(successOptions).wrapper.styles.background).toEqual(
      bg
    )
  })

  test('should accept a warning kind option', () => {
    const warningOptions = { kind: 'warning' } as AlertOptions
    const bg = 'hsl(43deg 100% 21% / 100%)'
    expect(getJSAlertProps(warningOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(warningOptions).wrapper.styles.background).toEqual(
      bg
    )
  })

  test('should accept a danger kind option', () => {
    const dangerOptions = { kind: 'danger' } as AlertOptions
    const bg = 'hsl(335deg 100% 18% / 100%)'
    expect(getJSAlertProps(dangerOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(dangerOptions).wrapper.styles.background).toEqual(bg)
  })
})
