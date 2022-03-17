import React, { memo } from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const iframeStyles = {
  border: 0,
  borderRadius: '12px',
  height: '200px',
  overflow: 'hidden',
  width: '100%',
}

const tabValues = [
  { label: 'React', value: 'react' },
  { label: 'styled components 💅', value: 'styled' },
  { label: 'Chakra', value: 'chakra' },
  { label: 'MUI/Joy', value: 'joy' },
  { label: 'Svelte', value: 'svelte' },
]

function Iframe({ sandbox }) {
  const src = `https://codesandbox.io/embed/${sandbox}?fontsize=14&hidenavigation=1&theme=dark&view=preview`

  return <div>{sandbox}</div>
}

function LiveExampleTabs(props) {
  const src = (sandbox) =>
    `https://codesandbox.io/embed/${sandbox}?fontsize=14&hidenavigation=1&theme=dark&view=preview`

  return (
    <Tabs defaultValue="react" values={tabValues}>
      <TabItem value="react">
        <Iframe sandbox={props.examples.react} />
      </TabItem>
      <TabItem value="styled">
        <Iframe sandbox={props.examples.styled} />
      </TabItem>
      <TabItem value="chakra">
        <Iframe sandbox={props.examples.chakra} />
      </TabItem>
      <TabItem value="joy">
        <Iframe sandbox={props.examples.joy} />
      </TabItem>
      <TabItem value="svelte">
        <Iframe sandbox={props.examples.svelte} />
      </TabItem>
    </Tabs>
  )
}

export default memo(LiveExampleTabs)
