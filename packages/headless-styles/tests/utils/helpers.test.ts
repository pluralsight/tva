import { createSvelteObj, transformStyles } from '../../src/utils/helpers'

describe('helpers', () => {
  test('should return a Svelte Obj if true', () => {
    expect(createSvelteObj('testClass')).toEqual({
      class: 'testClass',
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
})
