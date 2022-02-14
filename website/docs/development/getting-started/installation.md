---
sidebar_position: 1
tags: [Development, Installation, Fonts, Icons, Assets, Mobile]
---

# Installation

:::caution

This page is a work in progress.

:::

#### Install TVA, Pluralsight's headless UI framework that works with any library or tech stack.

TVA is available as a set of [npm packages](https://github.com/pluralsight/tva) for web and our `tokens` package is also compatable for iOS, Swift, Android, and Kotlin.

## npm

For the entire kitchen sink up front, just install the `headless-styles` package.

```bash npm2yarn
npm install @pluralsight/tva-headless-styles
```

Or if you want maximum flexibility, just install the `tokens` package:

```bash npm2yarn
npm install @pluralsight/design-tokens
```

## PS TT Commons font

TVA was designed with [PS TT Commons](https://github.com/pluralsight/tva) in mind. So be sure to follow the [typography instructions](https://github.com/pluralsight/tva). For the best results, install via an HTML `link` tag:

```
<link
  rel="stylesheet"
  href="https://...TBD"
/>
```

Each "component" uses a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) declaration to provide all weights programmatically. IE 11 does not support variable fonts, so any IE users will get the sans-serif fallback.

## Icon font

To use the icon font, you must first add the TVA [icons font](https://github.com/pluralsight/tva). For the best results, install via a HTML `link` tag:

```
<link
  rel="stylesheet"
  href="https://...TBD"
/>
```

## Mobile Assets

Our `tokens` package will also deliver all of our fonts and icons via assets for each platform we support (commonly `.png` types). :heart:

## Design resources

<!-- TODO: Add Figma "download" icon/link -->

A set of reusable components for design tools is available, designed to match the web components and to help you craft great products:

- [Figma](https://github.com/pluralsight/tva): A large UI kit with over 62 handcrafted TVA components.
