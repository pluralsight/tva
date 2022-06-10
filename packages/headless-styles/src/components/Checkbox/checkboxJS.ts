import { createJSProps, transformStyles } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import styles from './generated/checkboxCSS.module'
import type { CheckboxOptions } from './types'

export function getJSCheckboxProps(options?: CheckboxOptions) {
  const defaultOptions = getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)
  const containerStyles = {
    ...styles.checkboxContainer,
    ...styles[defaultOptions.direction as keyof typeof styles],
    '&[data-disabled="true"]': {
      ...styles.checkboxContainer_data_disabled__true,
    },
    '&[data-readonly="true"]': {
      ...styles.checkboxContainer_data_readonly__true,
    },
  }
  const controlStyles = {
    ...styles.checkboxControl,
    '&[data-checked="true"]': {
      ...styles.checkboxControl_data_checked__true,
    },
    '&[data-checked="true"]:hover': {
      ...styles.checkboxControl_data_checked__true['&:hover'],
    },
    '&[data-disabled="true"]': {
      ...styles.checkboxControl_data_disabled__true,
    },
    '&[data-invalid="true"]': {
      ...styles.checkboxControl_data_invalid__true,
    },
    '&[data-invalid="true"]:hover': {
      ...styles.checkboxControl_data_invalid__true['&:hover'],
    },
  }

  return {
    ...props,
    input: {
      a11yProps: {
        ...props.input,
      },
      ...createJSProps(
        transformStyles(styles.checkboxInput),
        styles.checkboxInput
      ),
    },
    checkboxContainer: {
      a11yProps: {
        ...props.checkboxContainer,
      },
      ...createJSProps(transformStyles(containerStyles), containerStyles),
    },
    checkboxControl: {
      a11yProps: {
        ...props.checkboxControl,
      },
      ...createJSProps(transformStyles(controlStyles), controlStyles),
    },
  }
}
