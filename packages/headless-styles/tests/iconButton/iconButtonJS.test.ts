import { getJSIconButtonProps } from '../../src'

describe('Icon Button JS (getJSIconButtonProps)', () => {
  test('should accept an ariaLabel option', () => {
    const { button } = getJSIconButtonProps({ ariaLabel: 'icon button' })

    expect(button.cssProps).not.toHaveLength(0)
    expect(button.styles).toBeDefined()
    expect(button.type).toEqual('button')
    expect(button.a11yProps).toEqual({
      'aria-label': 'icon button',
    })
  })

  test('should return icon options', () => {
    const { iconOptions } = getJSIconButtonProps({ ariaLabel: 'icon button' })

    expect(iconOptions).toEqual({
      size: 'm',
      ariaHidden: 'true',
    })
  })

  test('should accept a "round" variant type', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
      variant: 'round',
    })

    expect(button.cssProps).toContain('border-radius: 50%')
    expect(button.styles.borderRadius).toEqual('50%')
  })

  test('should allow no variant type to be passed in', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
    })

    expect(button.cssProps).toContain('border-radius: 6px')
    expect(button.styles.borderRadius).toEqual('6px')
  })

  test('should accept an xs size type', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
      size: 'xs',
    })

    expect(button.cssProps).toContain('width: 1.5rem')
    expect(button.styles.width).toEqual('1.5rem')

    expect(button.cssProps).toContain('padding-inline: 0')
    expect(button.styles.paddingInline).toEqual('0')
  })

  test('should accept a small size type', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
      size: 's',
    })

    expect(button.cssProps).toContain('width: 2rem')
    expect(button.styles.width).toEqual('2rem')

    expect(button.cssProps).toContain('padding-inline: 0')
    expect(button.styles.paddingInline).toEqual('0')
  })

  test('should accept a medium size type', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
      size: 'm',
    })

    expect(button.cssProps).toContain('width: 2.5rem')
    expect(button.styles.width).toEqual('2.5rem')

    expect(button.cssProps).toContain('padding-inline: 0')
    expect(button.styles.paddingInline).toEqual('0')
  })

  test('should accept a large size type', () => {
    const { button } = getJSIconButtonProps({
      ariaLabel: 'icon button',
      size: 'l',
    })

    expect(button.cssProps).toContain('width: 3rem')
    expect(button.styles.width).toEqual('3rem')

    expect(button.cssProps).toContain('padding-inline: 0')
    expect(button.styles.paddingInline).toEqual('0')
  })
})
