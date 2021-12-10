---
sidebar_position: 2
tags: [Development, Usage, Getting Started]
---

# Usage (Web)

:::caution

This is **unreleased** documentation for TVA **components** package.

:::

TVA packages and "components" work in isolation. **They are self-supporting**, and will only inject the styles they need to display and don't rely on any global style-sheets such as [normalize.css](https://github.com/necolas/normalize.css/).

You can use any of the packages/components as demonstrated in the documentation. Please refer to each "component's" [page](../packages/components/button) to see how they should be imported and used.

## Quick Start

<!-- TODO: Add React live imports when package published -->

Here's a quick example using React to get you started, **it's literally all you need**:

```jsx live
import { getButtonProps } from '@pluralsight/tva-components

function Button(props) {
  const { children, ...btnProps } = props
  const tvaBtnProps = getButtonProps()

  return (
    <button {...btnProps} {...tvaBtnProps}>
      {children}
    </button>
  )
}

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

TVA has a supported `@types/tva` package available for anyone who uses Typescript. All you need to do is install it as a `devDependency`. If you use [Yarn berry](https://yarnpkg.com/getting-started/migration), you can install the [typescript plugin](https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript) which will automatically install any supporting type delcaration packages you need for any dependency you add into your project!

```bash npm2yarn
npm install @types/tva -D
```

## Versioned Documentation

This documentation always reflects the latest stable version of TVA. You can find older versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle. Additionally, we release our **next** version documentation which has the 🚧 emoji next to it.
