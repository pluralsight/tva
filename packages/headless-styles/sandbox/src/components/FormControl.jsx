import { getFormControlProps, getJSFormControlProps } from '../../../src'

export default function FormControl(props) {
  if (props.logJS) {
    console.log({ ...getJSFormControlProps({ disabled: true }) })
  }

  return (
    <div id="form-control">
      <h3>Form Control</h3>
      <div className="App-container">
        <label {...getFormControlProps().control}>Strong</label>
      </div>
    </div>
  )
}
