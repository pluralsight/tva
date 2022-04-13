import { getButtonProps } from '../../src'

describe('Button CSS', () => {
  describe('getButtonProps', () => {
    const baseClass = 'ps_btn ps_btn_base'
    const result = {
      className: `${baseClass} ps_btn_text ps_btn_size-m `,
      type: 'button',
    }

    test('should allow no props to be passed in', () => {
      expect(getButtonProps()).toEqual(result)
    })

    test('should accept a kind type', () => {
      expect(getButtonProps({ kind: 'text' })).toEqual(result)
      expect(getButtonProps({ kind: 'text-weak' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_text-weak ps_btn_size-m `,
      })
      expect(getButtonProps({ kind: 'weak' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_weak ps_btn_size-m `,
      })
      expect(getButtonProps({ kind: 'medium' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_medium ps_btn_size-m `,
      })
      expect(getButtonProps({ kind: 'strong' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_strong ps_btn_size-m `,
      })
    })

    test('should accept a size type', () => {
      expect(getButtonProps({ size: 'm' })).toEqual(result)
      expect(getButtonProps({ size: 'xs' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_text ps_btn_size-xs `,
      })
      expect(getButtonProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_text ps_btn_size-s `,
      })
      expect(getButtonProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_text ps_btn_size-l `,
      })
    })

    test('should accept a tech type', () => {
      expect(getButtonProps({ tech: 'chakra' })).toEqual({
        ...result,
        className: `${baseClass} ps_btn_text ps_btn_size-m ps_btn_chakra`,
      })
    })
  })
})
