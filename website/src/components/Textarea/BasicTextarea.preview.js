import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTextareaPreview() {
  return (
    <CodeBlock>{`<textarea {...getTextareaProps({
    id: 'default',
    name: 'default',
    placeholder: 'Default resize',
    value: text,
  })}
  onChange={handleChange}
/>`}</CodeBlock>
  )
}

export function BasicTextareaFullPreview() {
  return (
    <CodeBlock>{`import { getTextareaProps } from '@pluralsight/headless-styles'

function Textarea() {
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <textarea
      {...getTextareaProps({
        id: 'default',
        name: 'default',
        placeholder: 'Default resize',
        value: text,
      })}
      onChange={handleChange}
    />
  )
}`}</CodeBlock>
  )
}
