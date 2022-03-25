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
import type { ButtonOptions, ButtonType, Kind, Size } from './types'

const BASE_FONT_SIZE = '16px'

const baseStyles = {
  js: {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily:
      'PS TT Commons Roman, Gotham SSm A, Gotham SSm B, Arial,sans-serif',
    fontSize: BASE_FONT_SIZE,
    fontWeight: 'inherit',
    height: 'initial',
    outlineOffset: 'initial',
    padding: '10px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',

    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: `3px solid ${psBackgroundActive}`,
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  css: `
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,
  sans-serif;
  font-weight: inherit;
  height: initial;
  outline-offset: initial;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:active {
    outline: none;
  }
  &:focus {
    outline: 3px solid ${psBackgroundActive};
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
    outline: none;
  }
`,
}

function getKindStyles(kind: Kind) {
  switch (kind) {
    case 'text-weak':
      return {
        css: `
          color: ${psTextMedium};
        `,
        js: {
          color: psTextMedium,
        },
      }

    case 'weak':
      return {
        css: `
          background-color: ${psNeutralBackground};
          color: ${psNeutralText};
        `,
        js: {
          backgroundColor: `${psNeutralBackground}`,
          color: psNeutralText,
        },
      }

    case 'medium':
      return {
        css: `
          background-color: ${psBackground};
          color: #fff;
        `,
        js: {
          backgroundColor: `${psBackground}`,
          color: '#fff',
        },
      }

    case 'strong':
      return {
        css: `
          background-color: ${psBackgroundWeak};
          color: ${psText};
        `,
        js: {
          backgroundColor: `${psBackgroundWeak}`,
          color: psText,
        },
      }

    default:
      return {
        css: `
          color: ${psNeutralTextWeak};
        `,
        js: {
          color: psNeutralTextWeak,
        },
      }
  }
}

function getSizeStyles(size: Size) {
  switch (size) {
    case 'xs':
      return {
        css: `
          font-size: 12px;
          padding: 4px 8px;
        `,
        js: {
          fontSize: '12px',
          padding: '4px 8px',
        },
      }

    case 's':
      return {
        css: `
          font-size: 14px;
          padding: 6px 12px;
        `,
        js: {
          fontSize: '14px',
          padding: '6px 12px',
        },
      }

    case 'l':
      return {
        css: `
          font-size: 16px;
          padding: 14.5px 24px;
        `,
        js: {
          fontSize: BASE_FONT_SIZE,
          padding: '14.5px 24px',
        },
      }

    default:
      return {
        css: `
          font-size: 16px;
          padding: 10px 16px;
        `,
        js: {
          fontSize: BASE_FONT_SIZE,
          padding: '10px 16px',
        },
      }
  }
}

function getPsuedoStyles(kind: Kind) {
  switch (kind) {
    case 'text-weak':
    case 'medium':
    case 'strong':
      return {
        css: `
          &:hover {
            color: #fff;
            background-color: ${psBackgroundHover};
          }
          &:active {
            background-color: ${psBackgroundActive};
          }
        `,
        js: {
          hover: {
            color: '#fff',
            backgroundColor: psBackgroundHover,
          },
          active: {
            backgroundColor: `${psBackgroundActive}`,
          },
        },
      }

    case 'weak':
      return {
        css: `
          &:hover {
            color: #fff;
            background-color: ${psNeutralBackgroundHover};
          }
          &:active {
            background-color: ${psNeutralBackgroundActive};
          }
        `,
        js: {
          hover: {
            color: '#fff',
            backgroundColor: psNeutralBackgroundHover,
          },
          active: {
            backgroundColor: `${psNeutralBackgroundActive}`,
          },
        },
      }

    default:
      return {
        css: `
          &:hover {
            color: #fff;
            background-color: ${psNeutralBackgroundHover};
          }
          &:active {
            background-color: ${psBackgroundActive};
          }
        `,
        js: {
          hover: {
            color: '#fff',
            backgroundColor: psNeutralBackgroundHover,
          },
          active: {
            backgroundColor: `${psBackgroundActive}`,
          },
        },
      }
  }
}

export function getJSButtonProps(options?: ButtonOptions) {
  const { kind, size } = getDefaultOptions(options)
  const kindStyles = getKindStyles(kind)
  const sizeStyles = getSizeStyles(size)
  const psuedoStyles = getPsuedoStyles(kind)

  return {
    cssProps: `
      ${baseStyles.css.trim()}
      ${kindStyles.css.trim()}
      ${sizeStyles.css.trim()}
      ${psuedoStyles.css.trim()}
    `
      .trim()
      .replace(/^ {2,12}/gm, ''),
    styles: {
      ...baseStyles.js,
      ...kindStyles.js,
      ...sizeStyles.js,
      '&:hover': { ...psuedoStyles.js.hover },
      '&:active': { ...baseStyles.js['&:active'], ...psuedoStyles.js.active },
    },
    type: 'button' as ButtonType,
  }
}