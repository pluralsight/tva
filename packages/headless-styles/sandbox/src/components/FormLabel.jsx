import { getFormLabelProps, getJSFormLabelProps } from '../../../src'

const defaultLabel = getFormLabelProps()
const smallLabel = getFormLabelProps({
  htmlFor: 'small-label',
  size: 's',
  value: 'Small label',
})
const requiredLabel = getFormLabelProps({
  htmlFor: 'email-alerts',
  required: true,
  value: 'Email alerts',
})

export default function FormLabel(props) {
  if (props.logJS) {
    console.log({ ...getJSFormLabelProps({ htmlFor: 'tacos' }) })
  }

  return (
    <div id="form-label">
      <h3>Form Label</h3>
      <div className="App-container">
        <label {...smallLabel}>{smallLabel.value}</label>
        <label {...defaultLabel}>{defaultLabel.value}</label>
        <label {...requiredLabel}>{requiredLabel.value}</label>
      </div>
    </div>
  )
}
