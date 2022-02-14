---
sidebar_position: 1
tags: [Development, Packages, Tokens, Intro]
---

# Intro

:::caution

This is **unreleased** documentation for TVA **tokens** package.

:::

#### Learn how to use TVA tokens for any project or OS platform.

## npm

To use tokens via the web, just install the npm package.

```bash npm2yarn
npm install @pluralsight/design-tokens
```

## What is a token?

A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.

## Naming convention

In order to make our tokens scalable and easier to consume, we use the same naming convention created by the Asana team.

```bash
# "usage" is the only property required

ps-[sentiment?]-[usage]-[prominence?]-[interaction?]
```

- **Sentiment** - "default", "neutral", "success", "warning", "danger", "selected"
- **Usage** - "background", "text", "icon", "border", "size"
- **Prominence** - "default", "weak", "medium", "strong", or clothing size shorthand
- **Interaction** - "default", "hover", "active", "focus", "disabled"

:::note
Values marked "default" can be ignored since the field is optional.
:::

What this looks like in terms of an actual token can be seen in an example for something that may apply to a Button:

```css title="Button example - not actual properties"
:root {
  --ps-selected-background: #123456;
  --ps-selected-background-hover: #123456;
}
```

## Usage

The `tokens` package is the single source of truth for all style properties and assets in the design system. This is how we define styles in `headless-styles` and why you can just use this package if you need maximum flexibility - or are on a mobile platform.

Depending on what platform you are using, will determine what you are able to consume from the `tokens` package.

### Web

For the web (npm), we will ship `css` properties, `scss` variables, and `js` es6 modules. This way, you can choose whatever syntax works best for your project.

The `headless-styles` package will consume the `css` and `js` tokens internally and depending on which function you call (css vs. CSS-in-JS) we will either return the styles being referenced from the tokens, or the tokens themselves (CSS-in-JS only).

#### CSS

When you use the `css`, we use the `:root` psuedo-selector to store the properties.

```css title="CSS example - not actual properties or values"
:root {
  --ps-text: #ff0000;
  --ps-warning-text: #00ff00;
  --ps-text-strong: #cccccc;
  --ps-size-s: 0.75rem;
  --ps-size-m: 1rem;
  --ps-size-l: 2rem;
  --ps-size-xl: 1rem;
}
```

#### es6

When you use the `js`, we use `export` for unique ID variable names.

```javascript title="JS example - not actual properties or values"
export const PsText = '#ff0000'
export const PsWarningText = '#00ff00'
export const PsTextStrong = '#cccccc'
export const PsSizeS = '0.75rem'
export const PsSizeM = '1rem'
export const PsSizeL = '2rem'
export const PsSizeXL = '1rem'
```

### Mobile

For mobile, we will ship `iOS`, `swift`, and `android` files to import into your projects via our repo.
