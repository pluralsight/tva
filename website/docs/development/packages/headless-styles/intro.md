---
sidebar_position: 1
tags: [Development, Packages, Components, Headless Styles, Chakra]
---

# Intro

:::caution

This is **unreleased** documentation for **headless-styles** package.

:::

<p class="page-subheadline" markdown="1">Install Pluralsight's headless UI framework that works with any library or tech stack.</p>

## npm

To use Headless Styles install the package with your preferred manager.

```bash npm2yarn
npm install @pluralsight/headless-styles@alpha
```

:::note

Some component examples use the [Icons](../icons/intro.md) package. Not all components require icons, so we do not include it in the above install recommendation.

:::

## Headless design

The Headless Styles library is a component-less tool that allows you to obtain all the styles needed for components without dictating a tech-stack for your team to use. This means that you can theorhetically use any combination of technology (i.e. React, Svelte, MUI, etc.) and the library should still work successfully for your team.

Having said that, it will always be impossible to cover every single use case so if your team comes across an instance where the styles are not matching the doc examples, please [file a bug report](https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+) so we can make sure that use case is covered.

## Examples

For each component, we provide mutliple examples using the most popular libraries. Out of the box, we provide examples for:

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Chakra UI](https://chakra-ui.com/)
- [MUI](https://mui.com/)
- [Svelte](https://svelte.dev/)

If there is an additional library you would like to see provided in the examples, please [start a poll](https://github.com/pluralsight/tva/discussions/categories/polls) and if it receives enough support, we will be happy to add it in. :smile:

## CSS & CSS-in-JS

Each of our Headless Styles component will deliver APIs for both CSS and CSS-in-JS use cases. Both APIs also come with some requirements for your project that you should be aware of for the most success.

### Themeing

Internally, we use the [Design Tokens](../tokens/intro.md) to control all the colors presented. Our suite comes with [multiple themes](../tokens/colors#themes) that work natively for **CSS environments**. This means that if your team uses CSS-in-JS, you will need to include a [provider](#css-in-js) to use theming.

### CSS Modules

For the CSS APIs, we use [CSS modules](https://github.com/css-modules/css-modules) which allow us to deliver the best experience regarding performance and scalability. Most tools come with CSS module support baked in (i.e. [CRA](https://create-react-app.dev/), [NextJS](https://nextjs.org/), [Vite](https://vitejs.dev/)).

If you are using a bundler with a custom config via [Webpack](https://webpack.js.org/) (or any other), you will need to make sure you add a [loader](https://webpack.js.org/loaders/css-loader/#modules) which should be available for any tool you are using.

### CSS-in-JS

Our CSS-in-JS APIs source a generated style Object we create internally which delivers the "dark" theme by default. If you want to use a custom theme, please see our [theme customization](../tokens/colors#js-custom-theming) in the Tokens docs.

The easiest solution is to just extend this library with whatever tool you prefer to use (i.e. React, styled-components, etc.) by following each components "extending" section example.

:::note

If you would like the Design System to provide a ThemeProvider solution, please contribute to our [discussion poll](https://github.com/pluralsight/tva/discussions/198).

:::

## Dependencies

:::caution

Headless Styles requires the use of our fonts and normalize setup. Please see the [installation guide](../../getting-started/installation) for more information.

:::
