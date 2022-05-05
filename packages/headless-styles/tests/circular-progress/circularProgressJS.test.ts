import { getJSCircularProgressProps } from '../../src'

describe('circular progress JS', () => {
  test('should return a distinct animation based on the kind', () => {
    expect(
      getJSCircularProgressProps().svgBoxProps.styles.animationName
    ).toEqual('')
    expect(
      getJSCircularProgressProps().nowCircleProps.styles.animationName
    ).toEqual('')

    expect(
      getJSCircularProgressProps({
        kind: 'indeterminate',
      }).svgBoxProps.styles.animationName
    ).toEqual('spin')
    expect(
      getJSCircularProgressProps({
        kind: 'indeterminate',
      }).nowCircleProps.styles.animationName
    ).toEqual('loading')
  })

  test('should return a distinct width difference based on the size', () => {
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
