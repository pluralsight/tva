import { useEffect } from 'react'
import { getFieldMessageProps, getJSFieldMessageProps } from '../../../src'

const { value, ...fieldProps } = getFieldMessageProps({
  id: 'test-one',
  message: "We'll never share your email...maybe.",
})

export default function FieldMessage({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSFieldMessageProps({
          id: 'hello',
          message: 'Hello there you good person!',
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
