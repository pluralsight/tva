import { getDefaultOptions } from './shared'
import type { ButtonOptions, ButtonType, Kind, Size } from './types'

const baseCSSProps = `
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
`

const buttonStyles = {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  padding: '10px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
}

function getKindStyles(kind: Kind) {
  return {
    css: ``,
    js: {},
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

    case 'm':
      return {
        css: `
          font-size: 16px;
          padding: 10px 16px;
        `,
        js: {
          fontSize: '16px',
          padding: '10px 16px',
        },
      }

    case 'l':
      return {
        css: `
          font-size: 16px;
          padding: 14.5px 24px;
        `,
        js: {
          fontSize: '16px',
          padding: '14.5px 24px',
        },
      }

    default:
      return {
        css: '',
        js: {},
      }
  }
}

export function getJSButtonProps(options?: ButtonOptions) {
  const { kind, size } = getDefaultOptions(options)
  const kindStyles = getKindStyles(kind)
  const sizeStyles = getSizeStyles(size)

  return {
    cssProps: `
      ${baseCSSProps}
      ${kindStyles.css}
      ${sizeStyles.css}
    `,
    styles: { ...buttonStyles, ...kindStyles.js, ...sizeStyles.js },
    type: 'button' as ButtonType,
  }
}
