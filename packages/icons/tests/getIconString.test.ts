import { getIconString } from '../src/string/index'

describe('getIconString', () => {
  test('it returns the requested icon as a string', () => {
    const strIcon = getIconString('ArrowDownRightIcon')
    expect(strIcon).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='currentColor' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )
  })

  test('it accepts hex colors', () => {
    expect(getIconString('ArrowDownRightIcon', '#fff')).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='%23fff' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )

    expect(getIconString('ArrowDownRightIcon', '#ffffff')).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='%23ffffff' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )
  })

  test('it accepts hsl/hsla colors', () => {
    expect(
      getIconString('ArrowDownRightIcon', 'hsl(249deg 63% 51% / 100%)')
    ).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='hsl(249deg%2063%25%2051%25%20%2F%20100%25)' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )

    expect(
      getIconString('ArrowDownRightIcon', 'hsla(249deg,63%,51%,100%)')
    ).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='hsla(249deg%2C63%25%2C51%25%2C100%25)' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )
  })

  test('it accepts hwb colors', () => {
    expect(
      getIconString('ArrowDownRightIcon', 'hwb(249deg 63% 51% / 100%)')
    ).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='hwb(249deg%2063%25%2051%25%20%2F%20100%25)' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )
  })

  test('it accepts rgb/rgba colors', () => {
    expect(getIconString('ArrowDownRightIcon', 'rgb(100,100,100)')).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='rgb(100%2C100%2C100)' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )

    expect(getIconString('ArrowDownRightIcon', 'rgba(100,100,100,.5)')).toEqual(
      "data:image/svg+xml;utf8,<svg aria-label='arrow pointing down-right' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' role='img' fill='rgba(100%2C100%2C100%2C.5)' class='ps-icon-svg'><path d='M5.177 6.587a.25.25 0 0 1 0-.354l1.056-1.056a.25.25 0 0 1 .354 0L17 15.59V9.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v9.25a.5.5 0 0 1-.5.5H9.25a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h6.34L5.177 6.587Z'/></svg>"
    )
  })
})
