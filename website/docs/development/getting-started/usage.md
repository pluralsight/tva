---
sidebar_position: 2
tags: [Development, Usage, Getting Started, Web, React Native]
---

# Usage (Web)

:::caution

This is **unreleased** documentation for TVA **components** package.

:::

TVA packages and "components" work in isolation. **They are self-supporting**, and will only inject the styles they need to display and don't rely on any global style-sheets such as [normalize.css](https://github.com/necolas/normalize.css/).

You can use any of the packages/components as demonstrated in the documentation. Please refer to each "component's" [page](../packages/components/button) to see how they should be imported and used.

## Headless design

TVA is designed as a headless vanilla Javascript library so you can use it within any stack that your team has chosen - it is _not_ framework specific. Whether you use React with MUI, Svelte, or React Native - TVA will work for you. :muscle:

We strive to provide codesandbox examples for the common popular stacks (mentioned). However, if there is an example you need for a combination that we do not provide, please [let us know](https://github.com/pluralsight/tva/discussions/categories/q-a) by starting a Q&A discussion.

## Quick Start

<!-- TODO: Add React live imports when package published -->

Here's a quick example using React to get you started, **it's literally all you need**:

```jsx title="components/Button.jsx"
import { getButtonProps } from '@pluralsight/tva-components

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

## Globals

TVA usage experience can be improved with a handful of important globals that you'll need to be aware of.

### Responsive meta tag

TVA is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up "components" as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

## Typescript

TVA is built using Typescript so we will include type definitions in the `components` package for any project that may require them.

## Versioned Documentation

This documentation always reflects the latest stable version of TVA. You can find older versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle. Additionally, we release our **next** version documentation which has the :construction: emoji next to it.
