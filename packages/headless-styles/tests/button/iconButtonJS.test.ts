import { getJSIconButtonProps } from '../../src'

describe('Icon Button JS', () => {
  describe('getJSIconButtonProps', () => {
    test('should accept an ariaLabel option', () => {
      const jsProps = getJSIconButtonProps({ ariaLabel: 'icon button' })

      expect(jsProps.cssProps).not.toHaveLength(0)
      expect(jsProps.styles).toBeDefined()
      expect(jsProps.type).toEqual('button')
      expect(jsProps.a11yProps).toEqual({
        'aria-label': 'icon button',
      })
    })

    test('should accept a "round" variant type', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
        variant: 'round',
      })

      expect(jsProps.cssProps).toContain('border-radius: 50%')
      expect(jsProps.styles.borderRadius).toEqual('50%')
    })

    test('should allow no variant type to be passed in', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
      })

      expect(jsProps.cssProps).toContain('border-radius: 6px')
      expect(jsProps.styles.borderRadius).toEqual('6px')
    })

    test('should accept an xs size type', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
        size: 'xs',
      })

      expect(jsProps.cssProps).toContain('width: 1.5rem')
      expect(jsProps.styles.width).toEqual('1.5rem')

      expect(jsProps.cssProps).toContain('padding-inline: 0')
      expect(jsProps.styles.paddingInline).toEqual('0')
    })

    test('should accept a small size type', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
        size: 's',
      })

      expect(jsProps.cssProps).toContain('width: 2rem')
      expect(jsProps.styles.width).toEqual('2rem')

      expect(jsProps.cssProps).toContain('padding-inline: 0')
      expect(jsProps.styles.paddingInline).toEqual('0')
    })

    test('should accept a medium size type', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
        size: 'm',
      })

      expect(jsProps.cssProps).toContain('width: 2.5rem')
      expect(jsProps.styles.width).toEqual('2.5rem')

      expect(jsProps.cssProps).toContain('padding-inline: 0')
      expect(jsProps.styles.paddingInline).toEqual('0')
    })

    test('should accept a large size type', () => {
      const jsProps = getJSIconButtonProps({
        ariaLabel: 'icon button',
        size: 'l',
      })

      expect(jsProps.cssProps).toContain('width: 3rem')
      expect(jsProps.styles.width).toEqual('3rem')

      expect(jsProps.cssProps).toContain('padding-inline: 0')
      expect(jsProps.styles.paddingInline).toEqual('0')
    })
  })
})
