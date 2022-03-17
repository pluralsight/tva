import React, { memo } from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const tabValues = [
  { label: 'React', value: 'react' },
  { label: 'styled components 💅', value: 'styled' },
  { label: 'Chakra', value: 'chakra' },
  { label: 'MUI/Joy', value: 'joy' },
  { label: 'Svelte', value: 'svelte' },
]

function LiveExampleTabs(props) {
  return (
    <Tabs defaultValue="react" values={tabValues}>
      <TabItem value="react">
        <CodeBlock>{props.examples.react}</CodeBlock>
      </TabItem>
      <TabItem value="styled">
        <CodeBlock>{props.examples.styled}</CodeBlock>
      </TabItem>
      <TabItem value="chakra">
        <CodeBlock>{props.examples.chakra}</CodeBlock>
      </TabItem>
      <TabItem value="joy">
        <CodeBlock>{props.examples.joy}</CodeBlock>
      </TabItem>
      <TabItem value="svelte">
        <CodeBlock>{props.examples.svelte}</CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default memo(LiveExampleTabs)
