import { getDefaultOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import styles from './generated/buttonCSS.module'
import type { ButtonOptions, ButtonType } from './types'

type ButtonReturn = Record<string, unknown>

const baseStyles = {
  ...styles.base,
}

export function getJSButtonProps(options?: ButtonOptions): ButtonReturn {
  const { kind, size } = getDefaultOptions(options)
  const kindClass = kind.replace('-', '_') as keyof typeof styles
  const kindKey = styles[kindClass]
  const sizeKey = `size_${size}` as keyof typeof styles
  const JsStyles = {
    ...baseStyles,
    ...kindKey,
    ...styles[sizeKey],
    '&:hover': {
      ...(kindKey[
        '&:hover' as unknown as keyof typeof kindKey
      ] as typeof styles),
      color: '#fff',
    },
    '&:active': {
      ...baseStyles['&:active'],
      ...(kindKey[
        '&:active' as unknown as keyof typeof kindKey
      ] as typeof styles),
    },
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
    type: 'button' as ButtonType,
  }
}
