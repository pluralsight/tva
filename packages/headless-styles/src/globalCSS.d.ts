declare module '*.module.css' {
  const styles: {
    [className: string]: string
    base: string
  }
  export default styles
}
