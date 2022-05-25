// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  radioGroup: {
    alignItems: 'center',
    display: 'flex',
  },
  radioContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    marginInlineStart: '1rem',
    verticalAlign: 'top',
  },
  radioInput: {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .radioControl': {
      boxShadow: '0 0 0 3px hsl(249deg 63% 34% / 100%)',
    },
    '&:focus:not(:focus-visible) + .radioControl': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  radioControl: {
    alignItems: 'center',
    borderColor: 'hsl(237deg 30% 36% / 100%)',
    borderImage: 'initial',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'hsl(249deg 62% 92% / 100%)',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'center',
    height: '1.125rem',
    marginInlineEnd: '0.437rem',
    transitionDuration: '150ms',
    transitionProperty: 'background, box-shadow',
    width: '1.125rem',
    '&:hover': {
      background: 'hsl(238deg 30% 32% / 100%)',
    },
  },
  radioContainer_data_disabled__true: {
    cursor: 'not-allowed',
  },
  radioContainer_data_readonly__true: {
    cursor: 'not-allowed',
  },
  radioControl_data_checked__true: {
    background: 'hsl(249deg 63% 51% / 100%)',
    borderColor: 'hsl(249deg 63% 51% / 100%)',
    '&:hover': {
      background: 'hsl(249deg 63% 43% / 100%)',
      borderColor: 'hsl(249deg 63% 43% / 100%)',
    },
    '&::before': {
      background: 'white',
      borderRadius: '50%',
      content: "''",
      display: 'inline-block',
      height: '50%',
      position: 'relative',
      width: '50%',
    },
  },
  radioControl_data_disabled__true: {
    background: 'hsl(238deg 30% 32% / 100%)',
    borderColor: 'hsl(238deg 30% 32% / 100%)',
  },
  radioControl_data_invalid__true: {
    background: 'hsl(336deg 100% 36% / 100%)',
    borderColor: 'hsl(336deg 100% 36% / 100%)',
    '&:hover': {
      background: 'hsl(336deg 100% 27% / 100%)',
      borderColor: 'hsl(336deg 100% 27% / 100%)',
    },
  },
  radioControl_data_readonly__true: {
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
  radiorow: {
    composes: 'radioContainer',
  },
  radiocol: {
    alignItems: 'flex-start',
    composes: 'radioContainer',
    flexDirection: 'column',
  },
}
