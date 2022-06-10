import { createJSProps, transformStyles } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../sharedDefaultOptions'
import { getDefaultCheckboxOptions } from './shared'
import styles from './generated/checkboxCSS.module'
import type { CheckboxOptions } from './types'

export function getJSCheckboxProps(options?: CheckboxOptions) {
  const defaultOptions = getDefaultCheckboxOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
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
    input: {
      a11yProps: {
        ...props.input,
        type: 'checkbox',
      },
      ...createJSProps(
        transformStyles(styles.checkboxInput),
        styles.checkboxInput
      ),
    },
    checkboxContainer: {
      a11yProps: {
        ...props.container,
      },
      ...createJSProps(transformStyles(containerStyles), containerStyles),
    },
    checkboxControl: {
      a11yProps: {
        ...props.control,
      },
      ...createJSProps(transformStyles(controlStyles), controlStyles),
    },
  }
}
