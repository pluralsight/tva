import { getJSIconButtonProps } from '../../src'

describe('getJSIconButtonProps', () => {
  const baseOptions = {
    ariaLabel: 'JS Icon Button',
  }

  test('should accept an ariaLabel prop', () => {
    const iconButtonReturn = getJSIconButtonProps(baseOptions)
    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
    expect(iconButtonReturn.button['aria-label']).toEqual('JS Icon Button')
  })

  test('should accept a textWeak kind type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      kind: 'textWeak',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a weak kind type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      kind: 'weak',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a medium kind type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      kind: 'medium',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a strong kind type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      kind: 'strong',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a xs size type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      size: 'xs',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a small size type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      size: 's',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a medium size type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      size: 'm',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a large size type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      size: 'l',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a blank variant type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()
  })

  test('should accept a round variant type', () => {
    const iconButtonReturn = getJSIconButtonProps({
      ...baseOptions,
      variant: 'round',
    })

    expect(iconButtonReturn.button.cssProps).not.toHaveLength(0)
    expect(iconButtonReturn.button.styles).toBeDefined()
    expect(iconButtonReturn.button.type).toEqual('button')
    expect(iconButtonReturn.iconOptions).toBeDefined()

    expect(iconButtonReturn.button.cssProps).toContain('border-radius: 50%')
    expect(iconButtonReturn.button.styles.borderRadius).toEqual('50%')
  })
})
