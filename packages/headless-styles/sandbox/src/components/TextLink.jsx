import { getTextLinkProps, getIconProps } from '../../../src'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ExternalLinkIcon,
} from '@pluralsight/icons'

export default function TextLink() {
  const { link, iconOptions } = getTextLinkProps()

  return (
    <div id="text-link">
      <h3>TextLink</h3>
      <div className="App-container">
        <a href="#text-link" {...link}>
          text link
        </a>
        <a href="https://www.google.com" {...link}>
          external link
          <ExternalLinkIcon {...getIconProps(iconOptions)} />
        </a>
        <a href="https://www.google.com" {...link}>
          <ChevronLeftIcon {...getIconProps(iconOptions)} />
          Go back
        </a>
        <a href="https://www.google.com" {...link}>
          View all
          <ChevronRightIcon {...getIconProps(iconOptions)} />
        </a>
      </div>
    </div>
  )
}
