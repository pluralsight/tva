import { getErrorMessageProps } from '../../../src'

const defaultErrorMessage = getErrorMessageProps({
  message: 'This should not show up.',
})
const errorMessage = getErrorMessageProps({
  invalid: true,
  message: 'First name is required.',
})

export default function ErrorMessage(props) {
  // if (props.logJS) {
  //   console.log({ ...getJSBadgeProps({ kind: 'medium' }) })
  // }

  return (
    <div id="ErrorMessage">
      <h3>ErrorMessage</h3>
      <div className="App-container">
        <div {...defaultErrorMessage.container}>
          <p {...defaultErrorMessage.message}>
            {defaultErrorMessage.message.value}
          </p>
        </div>
        <div {...errorMessage.container}>
          <p {...errorMessage.message}>{errorMessage.message.value}</p>
        </div>
      </div>
    </div>
  )
}
