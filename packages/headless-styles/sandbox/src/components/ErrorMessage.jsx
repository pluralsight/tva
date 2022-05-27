import { useEffect } from 'react'
import { getErrorMessageProps, getJSErrorMessageProps } from '../../../src'

const defaultErrorMessage = getErrorMessageProps({
  id: 'failed-one',
  message: 'This should not show up.',
})
const errorMessage = getErrorMessageProps({
  id: 'passed-one',
  invalid: true,
  message: 'First name is required.',
})

export default function ErrorMessage({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSErrorMessageProps({
          id: 'hello',
          invalid: true,
          message: 'Wrong, wrong, wrong.',
        }),
      })
    }
  }, [logJS])

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
