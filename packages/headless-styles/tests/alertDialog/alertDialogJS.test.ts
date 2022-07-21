import { getJSAlertDialogProps } from '../../src'

describe('Alert Dialog JS', () => {
  test('should allow no props to be passed in', () => {
    expect(getJSAlertDialogProps().wrapper.cssProps).toContain(
      'align-items: flex-start'
    )
    expect(getJSAlertDialogProps().wrapper.styles.alignItems).toEqual(
      'flex-start'
    )
  })

  // There is no difference re the kind option for the current API - however,
  // in the near future, when we update the Button API - there will be.

  // TODO: Add kind option tests after getButtonProps API updated
})
