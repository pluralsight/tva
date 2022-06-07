import { useEffect } from 'react'
import { getFieldMessageProps, getJSErrorMessageProps } from '../../../src'

const { value, ...fieldProps } = getFieldMessageProps({
  id: 'test-one',
  message: "We'll never share your email...maybe.",
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
    <div id="FieldMessage">
      <h3>Field Message</h3>
      <div className="App-container">
        <p {...fieldProps}>{value}</p>
      </div>
    </div>
  )
}
