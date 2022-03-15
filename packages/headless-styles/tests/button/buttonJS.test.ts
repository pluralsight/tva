import { getJSButtonProps } from '../../src'
import {
  defaultButtonCSS,
  lButtonCSS,
  mediumButtonCSS,
  sButtonCSS,
  strongButtonCSS,
  textWeakButtonCSS,
  weakButtonCSS,
  xsButtonCSS,
} from './fixtures/getButtonPropsCSS'
import {
  defaultButtonStyles,
  lButtonStyles,
  mediumButtonStyles,
  sButtonStyles,
  strongButtonStyles,
  weakButtonStyles,
  xsButtonStyles,
} from './fixtures/getButtonPropsJS'

describe('Button JS', () => {
  describe('getJSButtonProps', () => {
    const buttonType = 'button'
    const defaultValue = {
      cssProps: defaultButtonCSS,
      styles: defaultButtonStyles,
      type: buttonType,
    }

    test('should allow no props to be passed in', () => {
      expect(getJSButtonProps()).toMatchObject(defaultValue)
    })

    test('should accept a kind type', () => {
      expect(getJSButtonProps({ kind: 'text-weak' })).toMatchObject({
        ...defaultValue,
        cssProps: textWeakButtonCSS,
        styles: {
          ...defaultButtonStyles,
        },
      })
      expect(getJSButtonProps({ kind: 'weak' })).toMatchObject({
        ...defaultValue,
        cssProps: weakButtonCSS,
        styles: { ...weakButtonStyles },
      })
      expect(getJSButtonProps({ kind: 'medium' })).toMatchObject({
        ...defaultValue,
        cssProps: mediumButtonCSS,
        styles: { ...mediumButtonStyles },
      })
      expect(getJSButtonProps({ kind: 'strong' })).toMatchObject({
        ...defaultValue,
        cssProps: strongButtonCSS,
        styles: { ...strongButtonStyles },
      })
    })

    test('should accept a size type', () => {
      expect(getJSButtonProps({ size: 'xs' })).toMatchObject({
        ...defaultValue,
        cssProps: xsButtonCSS,
        styles: {
          ...xsButtonStyles,
        },
      })
      expect(getJSButtonProps({ size: 's' })).toMatchObject({
        ...defaultValue,
        cssProps: sButtonCSS,
        styles: { ...sButtonStyles },
      })
      expect(getJSButtonProps({ size: 'l' })).toMatchObject({
        ...defaultValue,
        cssProps: lButtonCSS,
        styles: { ...lButtonStyles },
      })
    })
  })
})
