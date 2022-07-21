import { getAvatarProps } from '../../src'

describe('Avatar CSS -> getAvatarProps', () => {
  const baseClass = 'ps-avatar'
  const defaultResult = {
    avatar: {
      'aria-label': '',
      className: `${baseClass} neutralAvatar mAvatar`,
    },
    image: {
      'aria-hidden': true,
      className: `${baseClass}-image avatarImage`,
    },
    iconOptions: {
      ariaHidden: true,
      customSize: '4rem',
      tech: '',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getAvatarProps()).toEqual(defaultResult)
  })

  test('should accept a neutral kind type', () => {
    expect(getAvatarProps({ kind: 'neutral' })).toEqual(defaultResult)
  })

  test('should accept a strong kind type', () => {
    expect(getAvatarProps({ kind: 'strong' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        className: `${baseClass} strongAvatar mAvatar`,
      },
    })
  })

  test('should accept an xs size option', () => {
    expect(getAvatarProps({ size: 'xs' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        className: `${baseClass} neutralAvatar xsAvatar`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '1.5rem',
      },
    })
  })

  test('should accept an s size option', () => {
    expect(getAvatarProps({ size: 's' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        className: `${baseClass} neutralAvatar sAvatar`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '2.5rem',
      },
    })
  })

  test('should accept an m size option', () => {
    expect(getAvatarProps({ size: 'm' })).toEqual(defaultResult)
  })

  test('should accept an l size option', () => {
    expect(getAvatarProps({ size: 'l' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        className: `${baseClass} neutralAvatar lAvatar`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '6rem',
      },
    })
  })

  test('should accept an xl size option', () => {
    expect(getAvatarProps({ size: 'xl' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        className: `${baseClass} neutralAvatar xlAvatar`,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        customSize: '8rem',
      },
    })
  })

  test('should accept an ariaLabel', () => {
    expect(getAvatarProps({ ariaLabel: 'Your profile' })).toEqual({
      ...defaultResult,
      avatar: {
        ...defaultResult.avatar,
        'aria-label': 'Your profile',
      },
    })
  })

  test('should accept a tech type', () => {
    expect(getAvatarProps({ tech: 'svelte' })).toEqual({
      avatar: {
        'aria-label': '',
        class: 'ps-avatar baseAvatar neutralAvatar mAvatar',
      },
      image: {
        'aria-hidden': true,
        class: 'ps-avatar-image avatarImage',
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '4rem',
        tech: 'svelte',
      },
    })
  })
})
