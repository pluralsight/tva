import { useState } from 'react'
import { getTextareaProps } from '../../../src'

export default function Textarea() {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div id="textarea">
      <h3>Textarea</h3>
      <div className="App-container column">
        <textarea
          {...getTextareaProps({
            id: 'default',
            name: 'default',
            placeholder: 'Default resize',
            value: text,
          })}
          onChange={handleChange}
        />
        <br />
        <textarea
          {...getTextareaProps({
            id: 'horizontal',
            name: 'horizontal',
            placeholder: 'Horizontal resize',
            value: text,
            resize: 'horizontal',
          })}
          onChange={handleChange}
        />
        <br />
        <textarea
          {...getTextareaProps({
            id: 'vertical',
            name: 'vertical',
            placeholder: 'Vertical resize',
            value: text,
            resize: 'vertical',
          })}
          onChange={handleChange}
        />
        <br />
        <textarea
          {...getTextareaProps({
            disabled: true,
            id: 'disabled',
            name: 'disabled',
            placeholder: 'Disabled state',
            value: text,
          })}
          onChange={handleChange}
        />
        <br />
        <textarea
          {...getTextareaProps({
            invalid: true,
            id: 'invalid',
            name: 'invalid',
            placeholder: 'invalid state',
            value: text,
          })}
          onChange={handleChange}
        />
        <br />
        <textarea
          {...getTextareaProps({
            readOnly: true,
            id: 'readOnly',
            name: 'readOnly',
            placeholder: 'readOnly state',
            value: text,
          })}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
