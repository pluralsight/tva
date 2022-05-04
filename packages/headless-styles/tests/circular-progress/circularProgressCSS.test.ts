import { getCircularProgressProps } from '../../src'

describe('CircularProgress CSS', () => {
  describe('getCircularProgressProps', () => {
    const baseClass = 'ps-circular-progress'
    const a11yProps = {
      'aria-valuemax': 100,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      role: 'progressbar',
    }
    const result = {
      containerProps: {
        ...a11yProps,
        className: `${baseClass} base determinate`,
      },
      svgBoxProps: {
        className: `${baseClass}_box box mSize`,
        viewBox: '0 0 100 100',
      },
      baseCircleProps: {
        className: `${baseClass}_base circle`,
        cx: '50',
        cy: '50',
        r: '42',
        strokeWidth: '12px',
      },
      nowCircleProps: {
        className: `${baseClass}_now circleNow`,
        cx: '50',
        cy: '50',
        r: '42',
        strokeWidth: '12px',
        strokeDashoffset: '66',
        strokeDasharray: '0 264',
      },
      labelProps: {
        className: `${baseClass}_label text`,
        value: '0%',
      },
    }

    test('should allow no props to be passed in', () => {
      expect(getCircularProgressProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getCircularProgressProps({ kind: 'determinate' })).toEqual(result)
      expect(getCircularProgressProps({ kind: 'indeterminate' })).toEqual({
        ...result,
        containerProps: {
          role: 'progressbar',
          className: `${baseClass} base indeterminate`,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(
        getCircularProgressProps({ tech: 'svelte', now: 60 }).labelProps
      ).toEqual({
        value: '60%',
        class: 'ps-circular-progress_label text',
      })
    })
  })
})
