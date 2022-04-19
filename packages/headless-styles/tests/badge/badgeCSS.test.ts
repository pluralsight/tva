import { getBadgeProps } from '../../src'

describe('Badge CSS', () => {
  describe('getBadgeProps', () => {
    const baseClass = 'ps-badge'
    const result = {
      className: `${baseClass} strong`,
    }

    test('should allow no props to be passed in', () => {
      expect(getBadgeProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getBadgeProps({ kind: 'strong' })).toEqual(result)
      expect(getBadgeProps({ kind: 'weak' })).toEqual({
        ...result,
        className: `${baseClass} weak`,
      })
      expect(getBadgeProps({ kind: 'medium' })).toEqual({
        ...result,
        className: `${baseClass} medium`,
      })
    })

    test('should accept a tech type', () => {
      expect(getBadgeProps({ tech: 'svelte' })).toEqual({
        class: 'ps-badge psBadgeBase strong',
      })
    })
  })
})
