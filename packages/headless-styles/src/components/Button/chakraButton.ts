import styles from './generated/buttonCSS.module'

type Styles = Record<string, unknown>

function isIconButton(props: { padding: string }) {
  return props.padding === '0'
}

function isRound(props: { borderRadius: string }) {
  return props.borderRadius === 'full'
}

function getChakraVariant(props: {
  variant: string
  borderRadius: string
  padding: string
}): Styles {
  const buttonStyles = styles[props.variant as keyof typeof styles]
  if (isIconButton(props)) {
    const iconButtonStyles = isRound(props)
      ? styles.roundIconButton
      : styles.defaultIconButton

    return {
      ...buttonStyles,
      ...iconButtonStyles,
    }
  }

  return {
    ...buttonStyles,
  }
}

// Public

export const ChakraButton = {
  baseStyle: styles.base,
  defaultProps: {
    size: 'm',
    variant: 'text',
  },
  sizes: {
    xs: styles.xs,
    s: styles.s,
    m: styles.base,
    l: styles.l,
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
