import { createClassProp } from '../../utils/helpers'
import { getDefaultTextLinkOptions, createTextLinkProps } from './shared'
import type { TextLinkOptions } from './types'
import styles from './textLinkCSS.module.css'

export function getTextLinkProps(options?: TextLinkOptions) {
  const defaultOptions = getDefaultTextLinkOptions(options)
  const props = createTextLinkProps(defaultOptions.href, defaultOptions.tech)

  return {
    ...props,
    link: {
      ...props.link,
      ...createClassProp(defaultOptions.tech, {
        defaultClass: `ps-text-link ${styles.baseTextLink}`,
        svelteClass: `baseTextLink`,
      }),
    },
  }
}
