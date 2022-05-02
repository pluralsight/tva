import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  describe('getProgressProps', () => {
    const baseClass = 'ps-progress'
    const result = {
      bar: {
        className: `${baseClass} sSize linear`,
      },
      wrapper: {
        className: `${baseClass} wrapper sSize linear`,
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getProgressProps({ kind: 'linear' })).toEqual(result)
      expect(getProgressProps({ kind: 'inset' })).toEqual({
        bar: {
          className: `${baseClass} sSize inset`,
        },
        wrapper: {
          className: `${baseClass} wrapper sSize inset`,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getProgressProps({ tech: 'svelte' })).toEqual({
        bar: {
          class: 'ps-progress bar sSize linear',
        },
        wrapper: {
          class: 'ps-progress wrapper sSize linear',
        },
      })
    })
  })
})
