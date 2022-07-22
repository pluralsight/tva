import { getJSAvatarProps } from '../../src'

describe('Avatar JS -> getJSAvatarProps', () => {
  const defaultIconOptions = {
    ariaHidden: true,
    customSize: '4rem',
    tech: '',
  }

  test('should allow no props to be passed in', () => {
    const props = getJSAvatarProps()
    expect(props.avatar.cssProps).toContain('border-radius: 50%')
    expect(props.avatar.styles.borderRadius).toEqual('50%')
    expect(props.image.cssProps).toContain('position: absolute')
    expect(props.image.styles.position).toEqual('absolute')
    expect(props.iconOptions).toEqual(defaultIconOptions)
  })

  test('should accept a kind type', () => {
    const neutralProps = getJSAvatarProps({ kind: 'neutral' })
    expect(neutralProps.avatar.cssProps).toContain(
      'background-color: hsl(238deg 30% 32% / 100%)'
    )
    expect(neutralProps.avatar.styles.backgroundColor).toEqual(
      'hsl(238deg 30% 32% / 100%)'
    )

    const strongProps = getJSAvatarProps({ kind: 'strong' })
    expect(strongProps.avatar.cssProps).toContain(
      'background-color: hsl(249deg 63% 51% / 100%)'
    )
    expect(strongProps.avatar.styles.backgroundColor).toEqual(
      'hsl(249deg 63% 51% / 100%)'
    )
  })

  test('should accept a size type', () => {
    const xsProps = getJSAvatarProps({ size: 'xs' })
    expect(xsProps.avatar.styles.width).toEqual('2rem')
    expect(xsProps.avatar.cssProps).toContain('width: 2rem')
    expect(xsProps.iconOptions.customSize).toEqual('1.5rem')

    const sProps = getJSAvatarProps({ size: 's' })
    expect(sProps.avatar.styles.width).toEqual('3rem')
    expect(sProps.avatar.cssProps).toContain('width: 3rem')
    expect(sProps.iconOptions.customSize).toEqual('2.5rem')

    const mProps = getJSAvatarProps({ size: 'm' })
    expect(mProps.avatar.styles.width).toEqual('5rem')
    expect(mProps.avatar.cssProps).toContain('width: 5rem')
    expect(mProps.iconOptions.customSize).toEqual('4rem')

    const lProps = getJSAvatarProps({ size: 'l' })
    expect(lProps.avatar.styles.width).toEqual('7.5rem')
    expect(lProps.avatar.cssProps).toContain('width: 7.5rem')
    expect(lProps.iconOptions.customSize).toEqual('6rem')

    const xlProps = getJSAvatarProps({ size: 'xl' })
    expect(xlProps.avatar.styles.width).toEqual('10rem')
    expect(xlProps.avatar.cssProps).toContain('width: 10rem')
    expect(xlProps.iconOptions.customSize).toEqual('8rem')
  })

  test('should accept an ariaLabel', () => {
    expect(
      getJSAvatarProps({ ariaLabel: 'Your profile' }).avatar.a11yProps[
        'aria-label'
      ]
    ).toEqual('Your profile')
  })
})
