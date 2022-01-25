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
npm install @pluralsight/tva-tokens
```

## What is a token?

A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.

## Usage

The `tokens` package is the singe source of truth for all style properties and assets in the design system. This is how we define styles in `components` and why you can just use this package if you need maximum flexibility - or are on a mobile platform.

Depending on what platform you are using, will determine what you are able to consume from the `tokens` package.

### Web

For the web (npm), we will ship `css` properties, `scss` variables, and `js` es6 modules. This way, you can choose whatever syntax works best for your project.

The `components` package will consume the `css` and `js` tokens internally and will be what we return in the functions.

#### CSS

When you use the `css`, we use the `:root` psuedo-selector to store the properties.

```css title="CSS example - not actual properties"
:root {
  --color-font-base: #ff0000;
  --color-font-secondary: #00ff00;
  --color-font-tertiary: #cccccc;
  --size-font-small: 0.75rem; /* the small size of the font */
  --size-font-medium: 1rem; /* the medium size of the font */
  --size-font-large: 2rem; /* the large size of the font */
  --size-font-base: 1rem; /* the base size of the font */
}
```

#### es6

When you use the `js`, we use `export` for unique ID variable names.

```javascript title="JS example - not actual properties"
export const ColorFontBase = '#ff0000'
export const ColorFontSecondary = '#00ff00'
export const ColorFontTertiary = '#cccccc'
export const SizeFontSmall = '0.75rem' // the small size of the font
export const SizeFontMedium = '1rem' // the medium size of the font
export const SizeFontLarge = '2rem' // the large size of the font
export const SizeFontBase = '1rem' // the base size of the font
```

### Mobile

For mobile, we will ship `iOS`, `swift`, and `android` files to import into your projects via our repo.
