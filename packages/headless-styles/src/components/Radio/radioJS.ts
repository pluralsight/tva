import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yProps, getDefaultRadioOptions } from './shared'
import styles from './generated/radioCSS.module'
import type { RadioOptions } from './types'

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

export function getJSRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const containerStyles = {
    ...styles.radioContainer,
    ...styles[defaultOptions.direction as keyof typeof styles],
    '&[data-disabled="true"]': {
      ...styles.radioContainer_data_disabled__true,
    },
    '&[data-readonly="true"]': {
      ...styles.radioContainer_data_readonly__true,
    },
  }
  const controlStyles = {
    ...styles.radioControl,
    '&[data-checked="true"]': {
      ...styles.radioControl_data_checked__true,
    },
    '&[data-checked="true"]::before': {
      ...styles.radioControl_data_checked__true['&::before'],
    },
    '&[data-disabled="true"]': {
      ...styles.radioControl_data_disabled__true,
    },
    '&[data-invalid="true"]': {
      ...styles.radioControl_data_invalid__true,
    },
  }

  return {
    input: {
      a11yProps: {
        ...inputProps,
      },
      ...createJSProps(transformStyles(styles.radioInput), styles.radioInput),
    },
    radioContainer: {
      a11yProps: {
        ...dataProps,
      },
      ...createJSProps(transformStyles(containerStyles), containerStyles),
    },
    radioControl: {
      a11yProps: {
        ...hidden,
        ...dataProps,
      },
      ...createJSProps(transformStyles(controlStyles), controlStyles),
    },
  }
}
