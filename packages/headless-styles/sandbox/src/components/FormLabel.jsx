import { getFormLabelProps } from '../../../src'

export default function FormLabel(props) {
  // if (props.logJS) {
  //   console.log({ ...getJSFormLabelProps({ htmlFor: 'tacos' }) })
  // }

  return (
    <div id="form-label">
      <h3>Form Label</h3>
      <div className="App-container">
        <label {...getFormLabelProps()}>Email</label>
      </div>
    </div>
  )
}
