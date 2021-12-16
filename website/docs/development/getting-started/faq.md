---
sidebar_position: 4
tags: [Development, FAQ, Getting Started]
---

# FAQ

:::caution

This page is a work in progress.

:::

Missing something? Check out some of these common questions first.

If you still can't find what you're looking for, you can refer to our [support page](https://github.com/pluralsight/tva/discussions/categories/q-a)

## I :heart: TVA! How can I support the project?

There are a few ways to support TVA:

<!-- TODO: Update Twitter link when account created. -->

- **Spread the word**. Evangelize TVA by [linking to design.pluralsight.com](https://design.pluralsight.com) on your website - every backlink matters. Follow us on [Twitter](https://twitter.com/pluralsight), like and retweet the important news. Or just talk about us with your friends.
- **Give us feedback**. Tell us what we are doing well or how we can improve the project. Please upvote [the discussions](https://github.com/pluralsight/tva/discussions) you are interested in seeing answered. Or upvote (:thumbsup:) [the issues](https://github.com/pluralsight/tva/issues) you are most interested in seeing resolved.
- **Help new users**. You can answer questions on the [Q&A discussion](https://github.com/pluralsight/tva/discussions/categories/q-a) or our [issues](https://github.com/pluralsight/tva/issues).
- **Make Changes happen!**
  - Edit the documentation. Every page on this site has an "Edit this page" link in the bottom left.
  - Report bugs or missing features by [creating an issue](https://github.com/pluralsight/tva/issues/new/choose) or [starting a new discussion](https://github.com/pluralsight/tva/discussions).
  - Review and comment on existing [pull requests](https://github.com/pluralsight/tva/pulls) and [issues](https://github.com/pluralsight/tva/issues).
  - Improve our documentation, fix bugs, or add features by [submitting a pull request](https://github.com/pluralsight/tva/pulls).
- **Star the repo**. The quickest way to help us get a win is by clicking that "star" button in Github!

## Why doesn't TVA export React components?

Since the first concept of a Component framework (Polymer), Components have swept the frontend industry introducing us to such libraries as React, Vue, and Svelte. Even Angular joined the club! However, this concept quickly changed the UI libraries we have known to instead be frontend vendor specific (MUI - React, React Bootstrap, etc.). This movement has been great in helping us understand Components and provide a great experience to users with the frameworks we have chosen to use.

However, in the past couple of years, we have realized that just because we _can_ create Component libraries...doesn't necessarily mean we _need_ to. This school of thought has brought us into the "headless" era where we can provide the maximum flexibility to consumers without sacrificing the control for them.

To put simply, in order to give our users the most flexibility so they can use whatever starting point or tech stack they would like, going "headless" is the answer.

_This allows us to scale no matter the stack and accomodate everyone which is one of our core values - to be inclusive to all projects and platforms._

## What packages are available for mobile platforms?

Because mobile platforms are fundamentally different than the web, only the `tokens` package is available for mobile platforms (all iOS and Android). However, `tokens` does come with everything you could possibly need for any platform (web and mobile):

- Style Properties
- Fonts
- Icon assets (mobile platform specific)

This is why we recommend _only_ using the `tokens` package if you want the most flexibility and own as much as possible to prevent roadblocks from releases.

## What is a headless component?

The term "headless" just refers to creating a compatible function that works along with a Component definition. This means that instead of exporting a framework specific Component, we are just exporting a vanilla Javascript function that returns an Object which contains all the accessbility and style properties you need for the best UI presentation. How you choose to use it, is completely up to you - and there are a _thousand_ different ways to use headless components to the benefit of your unique project.

Instead of this:

```jsx title="src/pages/SomePage.jsx"
import Button from '@pluralsight/design-system-button'

...

return (
  // Only compatible for React and can only use allowed props
  <Button appearance="Primary">Click me</Button>
)
```

You can do this (in any framework or library - here we are combining MUI with TVA):

```jsx title="src/components/ActionButton.jsx"
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { getButtonProps } from '@pluralsight/tva-components'

// 💡 Keep the function out of the component for better performance
const {styles as tvaStyles, ...a11yProps} = getButtonProps()

const BoostrapButton = styled(Button)({
  ...tvaStyles
})

function ActionButton(props) {
  return (
    <BootstrapButton {...a11yProps} variant="contained">
      {props.children}
    </BootstrapButton>
  )
}

export default ActionButton
```

Of course, using plain JSX html tags will gain you the biggest performance boost, but you can easily see how much more flexible headless options are. Your imagination is your guide.
