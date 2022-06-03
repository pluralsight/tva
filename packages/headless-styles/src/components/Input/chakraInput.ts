import styles from './generated/InputCSS.module'

const baseInputStyles = styles.inputBase
const chakraInputStyle = {
  field: {
    ...baseInputStyles,
    _active: {
      ...styles.inputBase['&:active'],
    },
    _hover: {
      ...styles.inputBase['&:hover'],
    },
    _focus: {
      ...styles.inputBase['&:focus'],
    },
    _disabled: {
      ...styles.inputBase_data_disabled__true,
      _hover: {
        ...styles.inputBase_data_disabled__true['&:hover'],
      },
    },
    _invalid: {
      ...styles.inputBase_data_invalid__true,
    },
    _readOnly: {
      ...styles.inputBase_data_readonly__true,
      _hover: {
        ...styles.inputBase_data_readonly__true['&:hover'],
      },
    },
  },
  addon: {
    bg: 'none',
    border: 'none',
  },
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
    outline: chakraInputStyle,
    filled: chakraInputStyle,
    flushed: chakraInputStyle,
    unstyled: chakraInputStyle,
  },
}
