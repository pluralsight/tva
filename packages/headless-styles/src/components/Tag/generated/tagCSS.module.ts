// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  baseTag: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    display: 'inline-flex',
    fontFamily:
      "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,\n    sans-serif",
    fontSize: '0.875rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    gap: '0.25rem',
    height: '1.5rem',
    justifyContent: 'center',
    outline: 'none',
    paddingInline: '4px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid hsl(249 63% 34%)',
    },
    '&:active': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  strongTag: {
    backgroundColor: 'hsl(249 63% 25%)',
    color: 'hsl(249 62% 92%)',
    composes: 'baseTag',
    '&:hover': {
      backgroundColor: 'hsl(248 63% 34%)',
    },
    '&:active': {
      backgroundColor: 'hsl(249 63% 25%)',
    },
  },
  weakTag: {
    backgroundColor: 'hsl(238 30% 32%)',
    color: 'hsl(0 0% 100%)',
    composes: 'baseTag',
    '&:hover': {
      backgroundColor: 'hsl(237 30% 36%)',
    },
    '&:active': {
      backgroundColor: 'hsl(240 31% 25%)',
    },
  },
  sTag: {
    composes: 'baseTag',
    fontSize: '0.75rem',
    height: '1.25rem',
  },
}
