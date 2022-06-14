---
sidebar_position: 2
tags: [Development, Usage, Getting Started, Web, React Native]
---

# Usage (Web)

:::caution

This page is a work in progress.

:::

Pluralsight Design packages and "components" work in isolation. **They are self-supporting**, and will only inject the styles they need to display.

You can use any of the packages as demonstrated in the documentation. Please refer to each "component's" [page](../packages/headless-styles/button) to see how they should be imported and used.

## Headless design

TVA is designed as a headless vanilla Javascript library so you can use it within any stack that your team has chosen - it is _not_ framework specific. Whether you use React with MUI, Svelte, or React Native - TVA will work for you. :muscle:

We strive to provide codesandbox examples for the common popular stacks (mentioned). However, if there is an example you need for a combination that we do not provide, please [let us know](https://github.com/pluralsight/tva/discussions/categories/q-a) by starting a Q&A discussion.

## Quick Start

Here's a quick example using React to get you started, **it's literally all you need**:

```jsx title="components/Button.jsx"
import { getButtonProps } from '@pluralsight/tva-headless-styles

const tvaBtnProps = getButtonProps()

function Button(props) {
  const { children, ...btnProps } = props

  return (
    <button {...btnProps} {...tvaBtnProps}>
      {children}
    </button>
  )
}

export default Button

```

The above code shows that all you need is to import a helper function and that's it! TVA provides all the properties you need to cover styles and accessibility so you can own the rest for maximum flexibility.

This means you can use **any framework** or library of your choice (React, Svelte, Vue, MUI, Styled-Components, .etc).

## Typescript

Pluralsight Design is built using Typescript so we will include type definitions in all of our packages that we provide.

## Versioned Documentation

This documentation always reflects the latest version of Pluralsight Design. You can find older or newer versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle.

Additionally, we release our **next** version documentation which uses the emoji - :construction:.
