import { getDefaultOptions } from './shared'
import type { ButtonOptions, ButtonType } from './types'
import './buttonCSS.css'

export function getButtonProps(options?: ButtonOptions) {
  const { kind, size, tech } = getDefaultOptions(options)
  const formattedSize = `size-${size}`
  const techClass = tech ? 'ps_btn_tech' : ''

  return {
    className: `ps_btn ps_btn_base ps_btn_${kind} ps_btn_${formattedSize} ${techClass}`,
    type: 'button' as ButtonType,
  }
}
