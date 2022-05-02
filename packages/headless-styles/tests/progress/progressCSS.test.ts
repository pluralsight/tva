import { getProgressProps } from '../../src'

describe('Progress CSS', () => {
  describe('getProgressProps', () => {
    const baseClass = 'ps-progress'
    const a11yProps = {
      'aria-valuemax': 100,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      role: 'progressbar',
    }
    const result = {
      ...a11yProps,
      style: {
        width: '0%',
      },
      classes: {
        bar: {
          className: `${baseClass} sSize linear`,
        },
        wrapper: {
          className: `${baseClass} wrapper sSize linear`,
        },
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getProgressProps({ kind: 'linear' })).toEqual(result)
      expect(getProgressProps({ kind: 'inset', now: 80 })).toEqual({
        ...a11yProps,
        'aria-valuenow': 80,
        style: {
          width: '80%',
        },
        classes: {
          bar: {
            className: `${baseClass} sSize inset`,
          },
          wrapper: {
            className: `${baseClass} wrapper sSize inset`,
          },
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getProgressProps({ tech: 'svelte', now: 60 })).toEqual({
        ...a11yProps,
        'aria-valuenow': 60,
        style: {
          width: '60%',
        },
        classes: {
          bar: {
            class: 'ps-progress bar sSize linear',
          },
          wrapper: {
            class: 'ps-progress wrapper sSize linear',
          },
        },
      })
    })
  })
})
