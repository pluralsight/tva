import React from 'react'
import { getTagWithIconProps, getIconProps } from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function IconTag(props) {
  const { tag, iconOptions } = getTagWithIconProps({
    kind: props.kind,
    size: props.size,
  })

  const iconProps = getIconProps(iconOptions)

  return (
    <a {...tag} href={props.href}>
      {!props.after && <PlaceholderIcon {...iconProps} />}

      {props.children}

      {props.after && <PlaceholderIcon {...iconProps} />}
    </a>
  )
}

function TagWithIcon() {
  return (
    <Container>
      <IconTag size="s">icon before text (s)</IconTag>
      <IconTag size="s" after>
        icon after text (s)
      </IconTag>

      <IconTag size="m">icon before text (m)</IconTag>
      <IconTag size="m" after>
        icon after text (m)
      </IconTag>
    </Container>
  )
}

export default TagWithIcon
