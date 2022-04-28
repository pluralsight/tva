import { getJSButtonProps } from '../../src'

describe('Button JS', () => {
  describe('getJSButtonProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSButtonProps().cssProps).not.toHaveLength(0)
      expect(getJSButtonProps().styles).toBeDefined()
      expect(getJSButtonProps().type).toEqual('button')
    })

    test('should accept a textWeak kind type', () => {
      expect(getJSButtonProps({ kind: 'textWeak' }).cssProps).not.toHaveLength(
        0
      )
      expect(getJSButtonProps({ kind: 'textWeak' }).styles).toBeDefined()
      expect(getJSButtonProps({ kind: 'textWeak' }).type).toEqual('button')
    })

    test('should accept a weak kind type', () => {
      expect(getJSButtonProps({ kind: 'weak' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ kind: 'weak' }).styles).toBeDefined()
      expect(getJSButtonProps({ kind: 'weak' }).type).toEqual('button')
    })

    test('should accept a medium kind type', () => {
      expect(getJSButtonProps({ kind: 'medium' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ kind: 'medium' }).styles).toBeDefined()
      expect(getJSButtonProps({ kind: 'medium' }).type).toEqual('button')
    })

    test('should accept a strong kind type', () => {
      expect(getJSButtonProps({ kind: 'strong' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ kind: 'strong' }).styles).toBeDefined()
      expect(getJSButtonProps({ kind: 'strong' }).type).toEqual('button')
    })

    test('should accept a xs size type', () => {
      expect(getJSButtonProps({ size: 'xs' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ size: 'xs' }).styles).toBeDefined()
      expect(getJSButtonProps({ size: 'xs' }).type).toEqual('button')
    })

    test('should accept a small size type', () => {
      expect(getJSButtonProps({ size: 's' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ size: 's' }).styles).toBeDefined()
      expect(getJSButtonProps({ size: 's' }).type).toEqual('button')
    })

    test('should accept a medium size type', () => {
      expect(getJSButtonProps({ size: 'm' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ size: 'm' }).styles).toBeDefined()
      expect(getJSButtonProps({ size: 'm' }).type).toEqual('button')
    })

    test('should accept a large size type', () => {
      expect(getJSButtonProps({ size: 'l' }).cssProps).not.toHaveLength(0)
      expect(getJSButtonProps({ size: 'l' }).styles).toBeDefined()
      expect(getJSButtonProps({ size: 'l' }).type).toEqual('button')
    })
  })
})
