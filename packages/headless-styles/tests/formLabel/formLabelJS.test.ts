import { getJSFormLabelProps } from '../../src'

describe('FormLabel JS', () => {
  describe('getJSFormLabelProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSFormLabelProps().a11yProps.htmlFor).toEqual('')
      expect(getJSFormLabelProps().label.cssProps).toContain(
        'font-weight: 400;'
      )
      expect(getJSFormLabelProps().label.styles.fontWeight).toEqual('400')
    })

    test('should accept a htmlFor option', () => {
      const htmlFor = 'hogwarts'

      expect(getJSFormLabelProps({ htmlFor }).a11yProps.htmlFor).toEqual(
        htmlFor
      )
    })
  })
})
