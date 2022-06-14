import { iconStrings } from './generated/iconStrings'

export type IconName = keyof typeof iconStrings

export default function getIconString(name: IconName, color = 'currentColor') {
  const dataPrefix = 'data:image/svg+xml;utf8,'
  return (
    dataPrefix +
    iconStrings[name].replace('fill="currentColor"', `fill="${color}"`)
  )
}
