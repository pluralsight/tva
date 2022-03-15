export const defaultButtonStyles = {
  appearance: 'none',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  padding: '10px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
  active: {
    backgroundColor: 'hsl(249deg 63% 34% / 100%)',
    outline: 'none',
  },
  focus: {
    outline: 0,
  },
  focusNotFocusVisible: {
    boxShadow: 'none',
    outline: 0,
  },
}

export const weakButtonStyles = {
  ...defaultButtonStyles,
  active: {
    ...defaultButtonStyles.active,
    backgroundColor: 'hsl(240deg 31% 25% / 100%)',
  },
  backgroundColor: 'hsl(238deg 30% 32% / 100%)',
}

export const mediumButtonStyles = {
  ...defaultButtonStyles,
  backgroundColor: 'hsl(249deg 63% 51% / 100%)',
}

export const strongButtonStyles = {
  ...defaultButtonStyles,
  backgroundColor: 'hsl(249deg 63% 25% / 100%)',
}

export const xsButtonStyles = {
  ...defaultButtonStyles,
  fontSize: '12px',
  padding: '4px 8px',
}

export const sButtonStyles = {
  ...defaultButtonStyles,
  fontSize: '14px',
  padding: '6px 12px',
}

export const lButtonStyles = {
  ...defaultButtonStyles,
  fontSize: '16px',
  padding: '14.5px 24px',
}
