import styles from './generated/checkboxCSS.module'

export const ChakraCheckbox = {
  baseStyle: {
    container: {
      ...styles.checkboxContainer,
      _disabled: {
        ...styles.checkboxContainer_data_disabled__true,
      },
    },
    control: {
      ...styles.checkboxControl,
      _hover: {
        ...styles.checkboxControl['&:hover'],
      },
      _focus: {
        ...styles.checkboxInput['&:focus + .checkboxControl'],
      },
      _checked: {
        ...styles.checkboxControl_data_checked__true,
        _hover: {
          ...styles.checkboxControl_data_checked__true['&:hover'],
        },
      },
      _disabled: {
        ...styles.checkboxControl_data_disabled__true,
      },
      _invalid: {
        ...styles.checkboxControl_data_invalid__true,
        _hover: {
          ...styles.checkboxControl_data_invalid__true['&:hover'],
        },
      },
    },
  },
  parts: ['label', 'icon', 'container', 'control'],
}
