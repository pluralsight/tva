import styles from './generated/textareaCSS.module'

const baseTextareaStyles = styles.textareaBase
const chakraTextareaStyle = {
  ...baseTextareaStyles,
  border: `${baseTextareaStyles.borderWidth} ${baseTextareaStyles.borderStyle} ${baseTextareaStyles.borderColor}`,
  _active: {
    ...baseTextareaStyles['&:active'],
  },
  _hover: {
    ...baseTextareaStyles['&:hover'],
  },
  _focus: {
    ...baseTextareaStyles['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...styles.textareaBase_data_disabled__true,
    _hover: {
      ...styles.textareaBase_data_disabled__true['&:hover'],
    },
  },
  _invalid: {
    ...styles.textareaBase_data_invalid__true,
  },
  _readOnly: {
    ...styles.textareaBase_data_readonly__true,
    _hover: {
      ...styles.textareaBase_data_readonly__true['&:hover'],
    },
  },
}

const textAreaSize = {
  ...baseTextareaStyles,
}

export const ChakraTextarea = {
  baseStyle: baseTextareaStyles,
  sizes: {
    xs: textAreaSize,
    sm: textAreaSize,
    m: textAreaSize,
    lg: textAreaSize,
  },
  variants: {
    outline: chakraTextareaStyle,
    filled: chakraTextareaStyle,
    flushed: chakraTextareaStyle,
    unstyled: chakraTextareaStyle,
  },
}
