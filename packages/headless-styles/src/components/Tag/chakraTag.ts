import styles from './generated/tagCSS.module'

const baseTagStyles = styles.baseTag

export const ChakraTag = {
  baseStyle: {
    container: {
      baseTagStyles,
    },
  },
  defaultProps: {
    size: 'm',
    variant: 'weak',
  },
  sizes: {
    s: {
      container: {
        ...baseTagStyles,
        ...styles.sTag,
      },
    },
    m: {
      container: baseTagStyles,
    },
  },
  variants: {
    weak: {
      container: styles.weakTag,
    },
    strong: {
      container: styles.strongTag,
    },
  },
}
