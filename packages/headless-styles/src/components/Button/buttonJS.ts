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
import styles from './generated/buttonCSS.module'
import type { ButtonOptions, ButtonType, Kind, Size } from './types'

const baseStyles = {
  js: {
    ...styles.base,
    '&:focus': {
      outline: `3px solid ${psBackgroundActive}`,
    },
  },
  css: `
    align-items: center;
    appearance: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    font-family: 'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,
      sans-serif;
    font-variation-settings: 'wght' 600;
    font-weight: 600;
    justify-content: center;
    outline: none;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
`,
}

function getKindStyles(kind: Kind) {
  switch (kind) {
    case 'text-weak':
      return {
        css: `
          background-color: transparent;
          color: ${psTextMedium};
        `,
        js: {
          ...styles.text_weak,
          color: psTextMedium,
          '&:active': {
            backgroundColor: psBackgroundActive,
          },
          '&:hover': {
            backgroundColor: psBackgroundHover,
          },
        },
      }

    case 'weak':
      return {
        css: `
          background-color: ${psNeutralBackground};
          color: ${psNeutralText};
        `,
        js: {
          ...styles.weak,
          backgroundColor: psNeutralBackground,
          color: psNeutralText,
          '&:active': {
            backgroundColor: psNeutralBackgroundActive,
          },
          '&:hover': {
            backgroundColor: psNeutralBackgroundHover,
          },
        },
      }

    case 'medium':
      return {
        css: `
          background-color: ${psBackground};
          color: #fff;
        `,
        js: {
          ...styles.medium,
          backgroundColor: psBackground,
          '&:active': {
            backgroundColor: psBackgroundActive,
          },
          '&:hover': {
            backgroundColor: psBackgroundHover,
          },
        },
      }

    case 'strong':
      return {
        css: `
          background-color: ${psBackgroundWeak};
          color: ${psText};
        `,
        js: {
          ...styles.strong,
          backgroundColor: psBackgroundWeak,
          color: psText,
          '&:active': {
            backgroundColor: psBackgroundActive,
          },
          '&:hover': {
            backgroundColor: psBackgroundHover,
          },
        },
      }

    default:
      return {
        css: `
          background-color: transparent;
          color: ${psNeutralTextWeak};
        `,
        js: {
          ...styles.text,
          color: psNeutralTextWeak,
          '&:active': {
            backgroundColor: psBackgroundActive,
          },
          '&:hover': {
            backgroundColor: psNeutralBackgroundHover,
          },
        },
      }
  }
}

function getSizeStyles(size: Size) {
  switch (size) {
    case 'xs':
      return `
        font-size: 0.75rem;
        height: 1.5rem;
        padding-inline: 8px;
      `

    case 's':
      return `
        font-size: 0.875rem;
        height: 2rem;
        padding-inline: 12px;
      `

    case 'l':
      return `
        font-size: 1rem;
        height: 3rem;
        padding-inline: 24px;
      `

    default:
      return `
        font-size: 1rem;
        height: 2.5rem;
        padding-inline: 16px;
      `
  }
}

function getPsuedoStyles(kind: Kind) {
  switch (kind) {
    case 'text-weak':
    case 'medium':
    case 'strong':
      return `
        &:hover {
          color: #fff;
          background-color: ${psBackgroundHover};
        }
        &:active {
          background-color: ${psBackgroundActive};
        }
      `

    case 'weak':
      return `
        &:hover {
          color: #fff;
          background-color: ${psNeutralBackgroundHover};
        }
        &:active {
          background-color: ${psNeutralBackgroundActive};
        }
      `

    default:
      return `
        &:hover {
          color: #fff;
          background-color: ${psNeutralBackgroundHover};
        }
        &:active {
          background-color: ${psBackgroundActive};
        }
      `
  }
}

export function getJSButtonProps(options?: ButtonOptions) {
  const { kind, size } = getDefaultOptions(options)
  const kindStyles = getKindStyles(kind)
  const sizeKey = `size_${size}` as keyof typeof styles

  return {
    cssProps: `
      ${baseStyles.css.trim()}
      ${kindStyles.css.trim()}
      ${getSizeStyles(size).trim()}
      ${getPsuedoStyles(kind).trim()}
    `
      .trim()
      .replace(/^ {2,12}/gm, ''),
    styles: {
      ...baseStyles.js,
      ...kindStyles.js,
      ...styles[sizeKey],
      '&:active': {
        ...baseStyles.js['&:active'],
        ...kindStyles.js['&:active'],
      },
    },
    type: 'button' as ButtonType,
  }
}
