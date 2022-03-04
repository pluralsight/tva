interface ButtonOptions {
  kind: 'default' | 'contained' | 'outlined'
  size: 'xs' | 's' | 'm' | 'l'
}

export function getButtonProps(props: ButtonOptions) {
  return {
    className: `ps-btn ${props.kind}`,
    type: 'button',
  }
}
