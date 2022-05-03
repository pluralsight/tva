import { getJSProgressProps } from '../../src'

describe('progress JS', () => {
  test('should return a distinct border-radius based on the kind', () => {
    expect(getJSProgressProps().wrapper.styles.borderRadius).toEqual('20px')
    expect(
      getJSProgressProps({
        kind: 'inset',
      }).wrapper.styles.borderRadius
    ).toEqual('initial')
  })

  test('should return a distinct height difference based on the size', () => {
    expect(getJSProgressProps().wrapper.styles.height).toEqual('0.5rem')
    expect(
      getJSProgressProps({
        size: 'xs',
      }).wrapper.styles.height
    ).toEqual('0.25rem')
  })
})
