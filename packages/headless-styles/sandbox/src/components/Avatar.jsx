import { cloneElement } from 'react'
import { PersonIcon } from '@pluralsight/icons'
import { getAvatarProps, getIconProps } from '../../../src'
import { weirdAl } from './Avatar.image'

const profileImage = <img src={weirdAl} />

function getAvatarElement(props) {
  if (props.href) {
    return 'a'
  } else if (props.onClick) {
    return 'button'
  }

  return 'span'
}

function getAvatarLabel(props, imageProps, iconOptions) {
  if (props.image) {
    return cloneElement(props.image, imageProps)
  } else if (props.firstName || props.lastName) {
    return [props.firstName?.charAt(0), props.lastName?.charAt(0)].join(' ')
  }

  return <PersonIcon {...getIconProps(iconOptions)} />
}

function Avatari(props) {
  const { avatar, image, iconOptions } = getAvatarProps({
    kind: props.kind,
    size: props.size,
    ariaLabel: props.label,
  })
  const Element = getAvatarElement(props)

  return (
    <Element {...avatar} href={props.href} onClick={props.onClick}>
      {getAvatarLabel(props, image, iconOptions)}
    </Element>
  )
}

const sizes = ['xs', 's', 'm', 'l', 'xl']
function AvatarSizes(props) {
  return sizes.map((size) => (
    <Avatari
      {...props}
      key={size}
      size={size}
      label={size}
      firstName={props.names && size.charAt(0)}
      lastName={props.names && size.charAt(1)}
    />
  ))
}

export default function Avatar() {
  return (
    <div id="avatar">
      <h3>Avatar</h3>
      <div className="App-container">
        <Avatari kind="neutral" label="neutral" icon={<PersonIcon />} />
        <Avatari kind="neutral" label="neutral" firstName="neutral" />
        <Avatari kind="strong" label="strong" icon={<PersonIcon />} />
        <Avatari kind="strong" label="strong" firstName="strong" />
      </div>
      <div className="App-container">
        <AvatarSizes icon={<PersonIcon />} />
      </div>
      <div className="App-container">
        <AvatarSizes names href="#avatar" />
      </div>
      <div className="App-container">
        <AvatarSizes
          image={profileImage}
          onClick={function () {
            console.log('Avatar pressed')
          }}
        />
      </div>
    </div>
  )
}
