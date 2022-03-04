interface ButtonOptions {
  kind: 'default' | 'contained' | 'outlined'
  size: 'xs' | 's' | 'm' | 'l'
}
export declare function getButtonProps(props: ButtonOptions): {
  className: string
  type: string
}
export {}
