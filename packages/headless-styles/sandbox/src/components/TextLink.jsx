import { getTextLinkProps, getIconProps } from '../../../src'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
} from '@pluralsight/icons'

function Link(props) {
  const { link, iconOptions } = getTextLinkProps({ href: props.href })
  const IconBefore = props.iconBefore
  const IconAfter = props.iconAfter
  console.log(link)

  return (
    <a {...link}>
      {IconBefore && <IconBefore {...getIconProps(iconOptions)} />}
      {props.children}
      {IconAfter && <IconAfter {...getIconProps(iconOptions)} />}
      {link.rel?.includes('external') && (
        <ExternalLinkIcon
          {...getIconProps({
            ...iconOptions,
            ariaHidden: false,
            ariaLabel: '(external link)',
          })}
        />
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
        <Link href="#text-link" iconBefore={ChevronLeftIcon}>
          Go back
        </Link>
        <Link href="#text-link" iconAfter={ChevronRightIcon}>
          View all
        </Link>
      </div>
    </div>
  )
}
