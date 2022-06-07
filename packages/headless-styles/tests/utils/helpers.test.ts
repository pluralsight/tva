import {
  createA11yProps,
  createCSSObj,
  createJSProps,
  createSvelteObj,
  transformStyles,
  createClassProp,
} from '../../src/utils/helpers'

describe('helpers', () => {
  test('should return a a11y props Object', () => {
    const a11yOptions = {
      disabled: false,
      invalid: true,
      readOnly: false,
      required: true,
    }

    expect(createA11yProps(a11yOptions)).toMatchObject({
      ['aria-invalid']: a11yOptions.invalid,
      ['data-disabled']: a11yOptions.disabled,
      ['data-invalid']: a11yOptions.invalid,
      ['data-readonly']: a11yOptions.readOnly,
      ['data-required']: a11yOptions.required,
      disabled: a11yOptions.disabled,
      readOnly: a11yOptions.readOnly,
      required: a11yOptions.required,
    })
  })

  test('should return a JS props Object', () => {
    const styles = {
      backgroundColor: 'blue',
    }
    const cssProps = `
      background-color: blue;
    `
    expect(createJSProps(cssProps, styles)).toEqual({
      cssProps,
      styles,
    })
  })

  test('should allow additional props to be included if given', () => {
    const styles = {
      backgroundColor: 'red',
    }
    const cssProps = `
      background-color: red;
    `
    expect(createJSProps(cssProps, styles, { type: 'button' })).toEqual({
      cssProps,
      styles,
      type: 'button',
    })
  })

  test('should return a Svelte Obj if true', () => {
    expect(createSvelteObj('testClass')).toEqual({
      class: 'testClass',
    })
  })

  test('should return a CSS Obj', () => {
    expect(createCSSObj('testClass')).toEqual({
      className: 'testClass',
    })
  })

  test('should return a CSS Obj w/ extra properties', () => {
    expect(createCSSObj('testClass2', { 'aria-role': 'progress' })).toEqual({
      className: 'testClass2',
      'aria-role': 'progress',
    })
  })

  test('should return a JS literal style string', () => {
    const styles = {
      background: 'black',
      fontVariationSettings: 'none',
      whiteSpace: 'none',
      '&:after': {
        backgroundColor: 'white',
      },
    }
    expect(transformStyles(styles)).toEqual(
      `
    background: black;
    font-variation-settings: none;
    white-space: none;
    &:after {

    background-color: white;
    }
    `
        .trim()
        .replace(/^ {2,12}/gm, '')
    )
  })

  test('should return a class prop based on tech', () => {
    const classOptions = {
      defaultClass: 'default',
      svelteClass: 'svelte',
    }

    expect(createClassProp('', classOptions)).toEqual({
      className: classOptions.defaultClass,
    })

    expect(createClassProp('svelte', classOptions)).toEqual({
      class: classOptions.svelteClass,
    })
  })
})
