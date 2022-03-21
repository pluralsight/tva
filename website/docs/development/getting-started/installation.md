---
sidebar_position: 1
tags: [Development, Installation, Fonts, Icons, Assets, Mobile]
---

# Installation

:::caution

This page is a work in progress.

:::

#### Install Pluralsight's headless UI framework that works with any library or tech stack.

Pluralsight Design is available as a set of [npm packages](https://github.com/pluralsight/tva) for web and our `design-tokens` package is also compatable for iOS, Swift, Android, and Kotlin.

## npm

For the entire kitchen sink up front, just install the `headless-styles` and `icons` package.

```bash npm2yarn
npm install @pluralsight/headless-styles@alpha @pluralsight/icons@alpha
```

:::caution
The `headless-styles` and `icons` packages will be available in the future.
:::

Or if you want maximum flexibility, just install the `design-tokens` package:

```bash npm2yarn
npm install @pluralsight/design-tokens@alpha
```

## PS TT Commons font

Our libraries were designed with PS TT Commons (Pluralsight brand font) in mind. For the best results, install via an HTML `link` tag:

```html
<link
  rel="preload"
  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/@pluralsight/design-tokens@alpha/fonts.css"
/>
```

Our fonts file declares both the brand font and a monospace font. We are only preloading the brand font since it's the most common used font across all of our products and teams. This will help boost performance and prevent FOUC.

Additionally, each "component" uses a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) declaration to provide all weights programmatically. IE 11 does not support variable fonts, so any IE users will get the sans-serif fallback.

:::caution
Be sure to add this resource **before** [normalize.css](#normalizecss) to prevent FOUC.
:::

## Normalize.css

All of our web packages **depend on our normalize.css** file to be used in your project. This file adds our CSS resets, the `design-tokens` for CSS consumption, and our themes. To add our normalize file, simply copy and paste the `link` content below into your `head` tag:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@pluralsight/design-tokens@alpha/normalize.css"
/>
```

## Mobile Assets

Our `tokens` package will also deliver all of our fonts and icons via assets for each platform we support (commonly `.png` types). :heart:

## Design resources

A set of reusable components for design tools is available, designed to match the web components and to help you craft great products:

- [Figma](https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1214%3A50531): A large (private) UI kit of handcrafted Pluralsight components.
