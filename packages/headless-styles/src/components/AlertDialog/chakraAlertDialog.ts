import styles from './generated/alertDialogCSS.module'

const modalParts = ['overlay', 'dialogContainer', 'dialog']
const modalExtend = ['header', 'closeButton', 'body', 'footer']

export const ChakraAlertDialog = {
  parts: [...modalParts, ...modalExtend],
  baseStyle: {
    overlay: styles.alertDialogBackdrop,
    dialog: {
      background: styles['']['&:root']['-PsBackdrop'],
    },
    header: styles.alertDialogTitle,
    body: styles.alertDialogBody,
  },
  sizes: {},
  defaultProps: {
    size: 'md',
  },
}
