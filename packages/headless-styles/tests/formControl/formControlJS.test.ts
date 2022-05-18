import { getJSFormControlProps } from '../../src'

describe('FormControl JS', () => {
  describe('getJSFormControlProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSFormControlProps().a11yProps.role).toEqual('group')
      expect(getJSFormControlProps().control.cssProps).toContain(
        'display: flex;'
      )
      expect(getJSFormControlProps().control.styles.display).toEqual('flex')
      expect(getJSFormControlProps().fieldOptions.disabled).not.toBeTruthy()
    })

    test('should accept a disabled type', () => {
      expect(
        getJSFormControlProps({ disabled: true }).fieldOptions.disabled
      ).toBeTruthy()
    })

    test('should accept a invalid type', () => {
      expect(
        getJSFormControlProps({ invalid: true }).fieldOptions.invalid
      ).toBeTruthy()
    })

    test('should accept a readOnly type', () => {
      expect(
        getJSFormControlProps({ readOnly: true }).fieldOptions.readOnly
      ).toBeTruthy()
    })

    test('should accept a required type', () => {
      expect(
        getJSFormControlProps({ required: true }).fieldOptions.required
      ).toBeTruthy()
    })
  })
})
