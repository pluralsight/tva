import styles from './generated/radioCSS.module'

export const ChakraRadio = {
  baseStyle: {
    container: {
      ...styles.radioContainer,
      _disabled: {
        ...styles.radioContainer_data_disabled__true,
      },
    },
    control: {
      ...styles.radioControl,
      _hover: {
        ...styles.radioControl['&:hover'],
      },
      _focus: {
        ...styles.radioInput['&:focus + .radioControl'],
      },
      _checked: {
        ...styles.radioControl_data_checked__true,
        _before: {
          ...styles.radioControl_data_checked__true['&::before'],
        },
        _hover: {
          ...styles.radioControl_data_checked__true['&:hover'],
        },
      },
      _disabled: {
        ...styles.radioControl_data_disabled__true,
      },
      _invalid: {
        ...styles.radioControl_data_invalid__true,
        _hover: {
          ...styles.radioControl_data_invalid__true['&:hover'],
        },
      },
    },
  },
  parts: ['label', 'container', 'control'],
}
