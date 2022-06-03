import buttonStyles from './generated/buttonCSS.module'
import iconButtonStyles from '../IconButton/generated/iconButtonCSS.module'

type Styles = Record<string, unknown>

function getChakraBase(props: { padding: string }) {
  // props.padding === '0' is our only indication that this is an icon button
  if (props.padding === '0') {
    return {
      ...buttonStyles.base,
      ...iconButtonStyles.baseIconButton,
    }
  }

  return buttonStyles.base
}

function getChakraSize(props: { padding: string; size: string }) {
  const buttonSizeKey = props.size === 'm' ? 'base' : props.size
  const iconButtonSizeKey =
    props.padding === '0' ? `${props.size}IconButton` : ''

  return {
    ...buttonStyles[buttonSizeKey as keyof typeof buttonStyles],
    ...iconButtonStyles[iconButtonSizeKey as keyof typeof iconButtonStyles],
  }
}

function getChakraVariant(props: {
  variant: string
  borderRadius: string
}): Styles {
  // props.borderRadius === 'full' indicates that `isRound` is true
  const roundStyles =
    props.borderRadius === 'full' ? iconButtonStyles.roundIconButton : {}

  return {
    ...buttonStyles[props.variant as keyof typeof buttonStyles],
    ...roundStyles,
  }
}

// Public

export const ChakraButton = {
  baseStyle: getChakraBase,
  defaultProps: {
    size: 'm',
    variant: 'text',
  },
  sizes: {
    xs: getChakraSize,
    s: getChakraSize,
    m: getChakraSize,
    l: getChakraSize,
  },
  variants: {
    text: getChakraVariant,
    textWeak: getChakraVariant,
    medium: getChakraVariant,
    strong: getChakraVariant,
    textDanger: getChakraVariant,
    mediumDanger: getChakraVariant,
    strongDanger: getChakraVariant,
  },
}
