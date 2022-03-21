export const defaultButtonStyles = {
  '&:active': {
    backgroundColor: 'hsl(249deg 63% 34% / 100%) !important',
    outline: 'none',
  },
  '&:focus': {
    outline: '3px solid hsl(249deg 63% 34% / 100%)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: 'hsl(237deg 30% 36% / 100%)',
    color: '#fff',
  },
  appearance: 'none',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'hsl(235deg 30% 78% / 100%)',
  cursor: 'pointer',
  fontSize: '16px',
  fontFamily:
    'PS TT Commons Roman, Gotham SSm A, Gotham SSm B, Arial,sans-serif',
  padding: '10px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'none',
  transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
}

export const weakButtonStyles = {
  ...defaultButtonStyles,
  '&:active': {
    ...defaultButtonStyles['&:active'],
    backgroundColor: 'hsl(240deg 31% 25% / 100%) !important',
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
