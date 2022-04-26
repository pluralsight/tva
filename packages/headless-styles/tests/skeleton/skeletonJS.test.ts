import { getJSSkeletonProps } from '../../src'

describe('Skeleton JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSSkeletonProps().cssProps).not.toHaveLength(0)
    expect(getJSSkeletonProps().styles).toBeDefined()
  })

  test('should accept a content kind type', () => {
    expect(getJSSkeletonProps({ kind: 'content' }).cssProps).not.toHaveLength(0)
    expect(getJSSkeletonProps({ kind: 'content' }).styles).toBeDefined()
  })

  test('should accept a text kind type', () => {
    expect(getJSSkeletonProps({ kind: 'text' }).cssProps).not.toHaveLength(0)
    expect(getJSSkeletonProps({ kind: 'text' }).styles).toBeDefined()
  })

  test('should accept a circle kind type', () => {
    expect(getJSSkeletonProps({ kind: 'circle' }).cssProps).not.toHaveLength(0)
    expect(getJSSkeletonProps({ kind: 'circle' }).styles).toBeDefined()
  })
})
