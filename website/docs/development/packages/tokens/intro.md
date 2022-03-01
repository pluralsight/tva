---
sidebar_position: 1
tags: [Development, Packages, Tokens, Intro]
---

# Intro

:::caution

This is **experimental** documentation for the **design-tokens** package.

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

For the web (npm), we ship `css` properties, `scss` variables, and `js` es6 modules. This way, you can choose whatever syntax works best for your project.

:::info
**We include the CSS tokens in our normalize setup**, so there is no need to install this package unless you are using another language.
:::

#### CSS

```css title="Alternatively importing tokens into your CSS"
import "@pluralsight/design-tokens/build/css/variables.css";
```

When you import `css`, we use the `:root` psuedo-selector to store the properties.

```css title="CSS import outcome (example)"
:root {
  --ps-text: #ff0000;
  --ps-background: #cccccc;
}
```

#### es6

```javascript title="Alternatively importing tokens into your JS"
import { PsText } from '@pluralsight/design-tokens'
```

When you use `js`, we `export` unique ID variable names.

```javascript title="JS import outcome (example)"
export const PsText = '#ff0000'
export const PsBackground = '#cccccc'
```

#### SCSS

```scss title="Importing tokens into your SCSS"
@use '@pluralsight/design-tokens/scss/_variables.scss';
```

When you use `scss`, we set the SCSS variables.

```scss title="SCSS import outcome (example)"
$ps-text: #ffffff;
$ps-background: #1b1834;
```

### Mobile

For mobile, we will ship `iOS`, `swift`, and `android` files to import into your projects via our repo.

## Why are the tokens limited to colors?

During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times.

In this research we have found that there _is_ a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for `padding` throughout your app can slow down render performance by **up to 2 seconds**!

During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more tokens (in the web).

Thus, the current standard which seems to keep a performant load time (under 1 second) is to **keep variables limited to only colors and the quantity being defined up to 37**.

This is the standard we align with for the `tokens` package and is why our semantic-tokens are what they are.
