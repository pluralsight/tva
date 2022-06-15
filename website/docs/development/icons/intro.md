---
sidebar_position: 1
tags: [Development, Usage, Intro, Icons]
---

# Intro

:::caution

This is **experimental** documentation for Pluralsight Design **icons** package.

:::

<p class="page-subheadline" markdown="1">The icons package provides icons ready to insert into your application as inline SVG elements.</p>

Icons are used to convey meaning at a glance, therefore it is important that their usage is consistent and that any meaning conveyed visually is also available to those without vision.

As symbols, the initial meaning may be different for each person, so it is also important that _our_ meaning is available for those who have not yet learned it, and that the symbol can be leveraged for those who have.

## Purpose

The purpose of this package is to provide the library of Pluralsight icons as simple, low-level elements that can be used to build content or higher-order components for the web.

## SVG vs. icon font

After a [thorough and unbiased comparison of the performance and quality of icon fonts vs inline SVG](https://github.com/pluralsight/tva/discussions/70) we determined that the most performant approach will be to use inline SVG elements. In the [RFC for the Icons package](https://github.com/pluralsight/tva-rfcs/blob/main/text/0000-icons.md) we continued to refine our approach for delivering and rendering icons on the web.

## Accessibility

An accessible label is included in each SVG.
In most cases the label describes the image (e.g., "arrow pointing left"), in others what it represents (e.g., "exit fullscreen").

```xml
<svg
  aria-label="arrow pointing right"
  viewBox="0 -2 18 18"
  role="img"
  fill="currentColor"
  class="ps-icon-svg"
>
  <path d="M9.864 13.01a.5.5 0 0 1 0-.708L14.166 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h13.668L9.864 1.696a.5.5 0 0 1 0-.708l.707-.707a.5.5 0 0 1 .707 0l6.364 6.364a.5.5 0 0 1 0 .707l-6.364 6.364a.5.5 0 0 1-.707 0l-.707-.707Z"/>
</svg>
```

**By default, the label will be read by screen readers.** The label may be overridden or disabled when a different label is needed or provided as part of a higher-order component (such as a button).

:::caution

If an icon provides meaning visually, be sure to provide the same meaning in an accessible way.

:::

## Organization and naming

We provide React components by default. Other formats will be available in corresponding subfolders. e.g., `import { MenuIcon } from '@pluralsight/icons/svelte'`

Icons are organized into categories in accordance with the Pluralsight Design standards.

## Minimizing bundle size

:::note

The following instructions are only needed if you are using an older bundler that doesn't support tree-shaking.

:::

Tree-shaking of `@pluralsight/icons` works out of the box in modern frameworks. If you're using ES6 modules and a bundler that supports tree-shaking you can safely use named imports and still get an optimized bundle size automatically:

```javascript
import { BookmarkIcon, MenuIcon } from '@pluralsight/icons'
```

### Pathed imports

Without tree-shaking, you can reduce your bundle size by directly importing the icons you need. To do this, append the category to the path.

```javascript title="Pathed import for React"
import PlayIcon from '@pluralsight/icons/react/audio-video/PlayIcon'
```

When importing for other frameworks, the framework comes before the category.

```javascript title="Pathed import for Svelte"
import PlayIcon from '@pluralsight/icons/svelte/audio-video/PlayIcon'
```

:::tip

Some systems may not support the package.json `exports` field. If the pathed imports are not working, you may need to reference the file directly. To do this, prepend `build/` to the path, and, in some cases, append the file extension.

`import PlayIcon from '@pluralsight/icons/build/svelte/audio-video/PlayIcon.svelte'`
:::
