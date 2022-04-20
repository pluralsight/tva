import { getJSBadgeProps } from '../../src'

describe('Badge JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSBadgeProps().cssProps).not.toHaveLength(0)
    expect(getJSBadgeProps().styles).toBeDefined()
  })

  test('should accept a weak kind type', () => {
    expect(getJSBadgeProps({ kind: 'weak' }).cssProps).not.toHaveLength(0)
    expect(getJSBadgeProps({ kind: 'weak' }).styles).toBeDefined()
  })

  test('should accept a medium kind type', () => {
    expect(getJSBadgeProps({ kind: 'medium' }).cssProps).not.toHaveLength(0)
    expect(getJSBadgeProps({ kind: 'medium' }).styles).toBeDefined()
  })

  test('should accept a strong kind type', () => {
    expect(getJSBadgeProps({ kind: 'strong' }).cssProps).not.toHaveLength(0)
    expect(getJSBadgeProps({ kind: 'strong' }).styles).toBeDefined()
  })
})
