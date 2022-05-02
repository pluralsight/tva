import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  describe('getProgressProps', () => {
    const baseClass = 'ps-progress'
    const result = {
      className: `${baseClass} sSize linear`,
    }

    test('should allow no props to be passed in', () => {
      expect(getProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getProgressProps({ kind: 'linear' })).toEqual(result)
      expect(getProgressProps({ kind: 'inset' })).toEqual({
        ...result,
        className: `${baseClass} sSize inset`,
      })
    })

    test('should accept a tech type', () => {
      expect(getProgressProps({ tech: 'svelte' })).toEqual({
        class: 'ps-progress base sSize linear',
      })
    })
  })
})
