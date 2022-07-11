import styles from './generated/alertCSS.module'

const chakraAlertStyle = {
  container: {
    ...styles.alertWrapper,
  },
  title: {
    ...styles.alertText,
    ...styles.alertTitle,
  },
  description: {
    ...styles.alertText,
    ...styles.alertDescription,
  },
  icon: {
    ...styles.alertIconWrapper,
  },
  spinner: {},
}

export const ChakraAlert = {
  parts: ['container', 'title', 'description', 'icon', 'spinner'],
  baseStyle: chakraAlertStyle,
  variants: {
    info: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.infoAlert,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.infoAlert['&::before'],
        },
      },
    },
    success: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.successAlert,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.successAlert['&::before'],
        },
      },
    },
    warning: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.warningAlert,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.warningAlert['&::before'],
        },
      },
    },
    danger: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.dangerAlert,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.dangerAlert['&::before'],
        },
      },
    },
    subtle: chakraAlertStyle,
    'left-accent': chakraAlertStyle,
    'top-accent': chakraAlertStyle,
    solid: chakraAlertStyle,
  },
}
