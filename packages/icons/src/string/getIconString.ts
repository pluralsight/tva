import { iconStrings } from './generated/iconStrings'
import type { CSSColor } from './types'

export type IconName = keyof typeof iconStrings

export default function getIconString<T extends string>(
  name: IconName,
  color: CSSColor<T> = 'currentColor'
) {
  const dataPrefix = 'data:image/svg+xml;utf8,'
  return (
    dataPrefix +
    iconStrings[name].replace('currentColor', `${encodeURIComponent(color)}`)
  )
}
