import { getTextLinkProps, getIconProps } from '../../../src'
import { ExternalLinkIcon } from '@pluralsight/icons'

function Link(props) {
  const { link, iconOptions } = getTextLinkProps({ href: props.href })

  return (
    <a {...link}>
      {props.children}
      {link.rel?.includes('external') && (
        <ExternalLinkIcon {...getIconProps(iconOptions)} />
      )}
    </a>
  )
}

export default function TextLink() {
  return (
    <div id="text-link">
      <h3>TextLink</h3>
      <div className="App-container">
        <Link href="#text-link">text link</Link>
        <Link href="https://www.google.com">Google</Link>
      </div>
    </div>
  )
}
