import { getJSFormLabelProps } from '../../src'
import type { FormLabelOptions } from '../../src/types'

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
      expect(
        getJSFormLabelProps({ htmlFor, value: '' }).a11yProps.htmlFor
      ).toEqual(htmlFor)
    })

    test('should accept a size option', () => {
      const options = { htmlFor: '', size: 's' } as FormLabelOptions
      expect(getJSFormLabelProps(options).label.cssProps).toContain(
        'font-size: 0.75rem;'
      )
      expect(getJSFormLabelProps(options).label.styles.fontSize).toEqual(
        '0.75rem'
      )
    })
  })
})
