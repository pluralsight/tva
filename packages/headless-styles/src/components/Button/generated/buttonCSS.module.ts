export default {
  base: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily:
      "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial, sans-serif",
    fontSize: '1rem',
    fontVariationSettings: "'wght' 600",
    fontWeight: '600',
    height: '2.5rem',
    justifyContent: 'center',
    outline: 'none',
    paddingInline: '16px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: '3px solid var(--ps-background-active)',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  text: {
    color: 'var(--ps-neutral-text-weak)',
    '&:hover': {
      backgroundColor: 'var(--ps-neutral-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  text_weak: {
    color: 'var(--ps-text-medium)',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  weak: {
    backgroundColor: 'var(--ps-neutral-background)',
    color: 'var(--ps-neutral-text)',
    '&:hover': {
      backgroundColor: 'var(--ps-neutral-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-neutral-background-active)',
    },
  },
  medium: {
    backgroundColor: 'var(--ps-background)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  strong: {
    backgroundColor: 'var(--ps-background-weak)',
    color: 'var(--ps-text)',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover)',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  size_xs: {
    fontSize: '0.75rem',
    height: '1.5rem',
    paddingInline: '8px',
  },
  size_s: {
    fontSize: '0.875rem',
    height: '2rem',
    paddingInline: '12px',
  },
  size_l: {
    height: '3rem',
    paddingInline: '24px',
  },
  light__base_text: {
    '&:hover': {
      color: 'var(--ps-neutral-text-weak)',
    },
  },
  html_data_theme__light____base_text: {
    '&:hover': {
      color: 'var(--ps-neutral-text-weak)',
    },
  },
  chakra: {
    backgroundColor: 'transparent !important',
    borderRadius: '6px !important',
    fontSize: '1rem !important',
    fontWeight: '600 !important',
    height: '1.5rem !important',
    outlineOffset: 'initial !important',
  },
  chakra_weak: {
    backgroundColor: 'var(--ps-neutral-background) !important',
    '&:hover': {
      backgroundColor: 'var(--ps-neutral-background-hover) !important',
    },
    '&:active': {
      backgroundColor: 'var(--ps-neutral-background-active) !important',
    },
  },
  chakra_medium: {
    backgroundColor: 'var(--ps-background) !important',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover) !important',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active) !important',
    },
  },
  chakra_strong: {
    backgroundColor: 'var(--ps-background-weak) !important',
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover) !important',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active) !important',
    },
  },
  chakra_size_xs: {
    fontSize: '0.75rem !important',
    height: '1.5rem !important',
    paddingInline: '8px !important',
  },
  chakra_size_s: {
    fontSize: '0.875rem !important',
    height: '2rem !important',
    paddingInline: '12px !important',
  },
  chakra_size_l: {
    height: '3rem !important',
    paddingInline: '24px !important',
  },
  chakra_text_weak: {
    '&:hover': {
      backgroundColor: 'var(--ps-background-hover) !important',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active) !important',
    },
  },
  chakra_text: {
    '&:hover': {
      backgroundColor: 'var(--ps-neutral-background-hover) !important',
    },
    '&:active': {
      backgroundColor: 'var(--ps-background-active) !important',
    },
  },
}
