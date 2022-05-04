import { getJSCircularProgressProps } from '../../src'

describe('circular progress JS', () => {
  test('should return a distinct animation based on the kind', () => {
    expect(
      getJSCircularProgressProps().containerProps.styles.animationName
    ).not.toBeDefined()
    expect(
      getJSCircularProgressProps({
        kind: 'indeterminate',
      }).containerProps.styles.animationName
    ).toEqual('spin')
  })

  test('should return a distinct height difference based on the size', () => {
    expect(getJSCircularProgressProps().svgBoxProps.styles.width).toEqual(
      '3rem'
    )
    expect(
      getJSCircularProgressProps({
        size: 'xs',
      }).svgBoxProps.styles.width
    ).toEqual('1.25rem')
  })
})
