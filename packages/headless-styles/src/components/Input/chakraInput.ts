import styles from './generated/InputCSS.module'

const baseInputStyles = styles.inputBase

function getChakraInputStyle() {
  return {
    field: {
      ...baseInputStyles,
      _hover: {
        ...styles.inputBase['&:hover'],
      },
      _focus: {
        ...styles.inputBase['&:focus'],
      },
      _disabled: {
        ...styles.inputBase_data_disabled__true,
      },
      _invalid: {
        ...styles.inputBase_data_invalid__true,
      },
      _readOnly: {
        ...styles.inputBase_data_readonly__true,
      },
    },
  }
}

export const ChakraInput = {
  baseStyle: baseInputStyles,
  sizes: {
    m: {
      ...baseInputStyles,
      ...styles.mInputSize,
    },
    l: {
      ...baseInputStyles,
    },
  },
  variants: {
    outline: getChakraInputStyle(),
    filled: getChakraInputStyle(),
    flushed: getChakraInputStyle(),
    unstyled: getChakraInputStyle(),
  },
}
