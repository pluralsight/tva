import {
  psBackground,
  psBackgroundActive,
  psBackgroundHover,
  psBackgroundWeak,
  psNeutralBackground,
  psNeutralBackgroundActive,
  psNeutralBackgroundHover,
  psNeutralText,
  psNeutralTextWeak,
  psText,
  psTextMedium,
} from '@pluralsight/design-tokens'
import { getDefaultOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import styles from './generated/buttonCSS.module'
import type { ButtonOptions, ButtonType, Kind } from './types'

const baseStyles = {
  ...styles.base,
  '&:focus': {
    outline: `3px solid ${psBackgroundActive}`,
  },
}

function getKindStyles(kind: Kind) {
  switch (kind) {
    case 'text-weak':
      return {
        ...styles.text_weak,
        color: psTextMedium,
        '&:active': {
          backgroundColor: psBackgroundActive,
        },
        '&:hover': {
          backgroundColor: psBackgroundHover,
          color: '#fff',
        },
      }

    case 'weak':
      return {
        ...styles.weak,
        backgroundColor: psNeutralBackground,
        color: psNeutralText,
        '&:active': {
          backgroundColor: psNeutralBackgroundActive,
        },
        '&:hover': {
          backgroundColor: psNeutralBackgroundHover,
        },
      }

    case 'medium':
      return {
        ...styles.medium,
        backgroundColor: psBackground,
        '&:active': {
          backgroundColor: psBackgroundActive,
        },
        '&:hover': {
          backgroundColor: psBackgroundHover,
          color: '#fff',
        },
      }

    case 'strong':
      return {
        ...styles.strong,
        backgroundColor: psBackgroundWeak,
        color: psText,
        '&:active': {
          backgroundColor: psBackgroundActive,
        },
        '&:hover': {
          backgroundColor: psBackgroundHover,
          color: '#fff',
        },
      }

    default:
      return {
        ...styles.text,
        color: psNeutralTextWeak,
        '&:active': {
          backgroundColor: psBackgroundActive,
        },
        '&:hover': {
          backgroundColor: psNeutralBackgroundHover,
          color: '#fff',
        },
      }
  }
}

export function getJSButtonProps(options?: ButtonOptions) {
  const { kind, size } = getDefaultOptions(options)
  const kindStyles = getKindStyles(kind)
  const sizeKey = `size_${size}` as keyof typeof styles
  const JsStyles = {
    ...baseStyles,
    ...kindStyles,
    ...styles[sizeKey],
    '&:active': {
      ...baseStyles['&:active'],
      ...kindStyles['&:active'],
    },
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
    type: 'button' as ButtonType,
  }
}
