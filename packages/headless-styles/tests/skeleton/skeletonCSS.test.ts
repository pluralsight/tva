import { getSkeletonProps } from '../../src'

describe('Skeleton CSS', () => {
  describe('getSkeletonProps', () => {
    const baseClass = 'ps-skeleton'
    const result = {
      className: `${baseClass} content`,
    }

    test('should allow no props to be passed in', () => {
      expect(getSkeletonProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getSkeletonProps({ kind: 'content' })).toEqual(result)
      expect(getSkeletonProps({ kind: 'text' })).toEqual({
        ...result,
        className: `${baseClass} text`,
      })
      expect(getSkeletonProps({ kind: 'circle' })).toEqual({
        ...result,
        className: `${baseClass} circle`,
      })
    })

    test('should accept a tech type', () => {
      expect(getSkeletonProps({ tech: 'svelte' })).toEqual({
        class: 'ps-skeleton base content',
      })
    })
  })
})
