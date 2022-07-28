import {
  psDangerBackgroundWeak,
  psInfoBackgroundWeak,
  psSuccessBackgroundWeak,
  psWarningBackgroundWeak,
} from '@pluralsight/design-tokens'
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
    const bg = psInfoBackgroundWeak
    expect(getJSAlertProps(infoOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(infoOptions).wrapper.styles.background).toEqual(bg)
  })

  test('should accept a success kind option', () => {
    const successOptions = { kind: 'success' } as AlertOptions
    const bg = psSuccessBackgroundWeak
    expect(getJSAlertProps(successOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(successOptions).wrapper.styles.background).toEqual(
      bg
    )
  })

  test('should accept a warning kind option', () => {
    const warningOptions = { kind: 'warning' } as AlertOptions
    const bg = psWarningBackgroundWeak
    expect(getJSAlertProps(warningOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(warningOptions).wrapper.styles.background).toEqual(
      bg
    )
  })

  test('should accept a danger kind option', () => {
    const dangerOptions = { kind: 'danger' } as AlertOptions
    const bg = psDangerBackgroundWeak
    expect(getJSAlertProps(dangerOptions).wrapper.cssProps).toContain(
      `background: ${bg}`
    )
    expect(getJSAlertProps(dangerOptions).wrapper.styles.background).toEqual(bg)
  })
})
