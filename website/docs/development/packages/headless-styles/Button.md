---
sidebar_position: 2
tags: [Development, Packages, Components, Button]
---

# Button

:::caution

This is **unreleased** documentation for **headless-styles** package.

:::

The Button is used to call attention, perform an action, or to nagivate.

Buttons communicate actions that users can take. In your UI, they are typically found in places like:

- Forms
- Modal windows
- Course Cards

## Basic Button

The `Button` comes with three variants: text (default), contained, and outlined.

<!-- TODO: ADD USAGE LIVE CODE EXAMPLES HERE -->

```jsx
const tvaButtonProps = getButtonProps() // default
const tvaContainedButtonProps = getButtonProps({ kind: 'contained' })
const tvaOutlinedButtonProps = getButtonProps({ kind: 'outlined' })
```

## Button with icon and label

You can combine icons with the `Button` using the `getIconLablProps` and and Icon from the PS Icons font library.

```jsx title=components/EditButton.jsx
import {
  getButtonProps,
  getIconLabelProps,
} from '@pluralsight/tva-headless-styles'

const tvaButtonProps = getButtonProps({ kind: 'contained' })
const tvaIconLabelProps = getIconLabelProps()

function EditButton(props) {
  return (
    <button {...props} {...tvaButtonProps}>
      {/* This icon is from the PS Icons font - unicode WIP!!  */}
      <span {...tvaIconLabelProps}>w61</span>
      <p>Edit</p>
    </button>
  )
}
```

## Button with icon (no label)

Icon buttons are commonly found in app bars, toolbars, or as an action such as "toggle".

```jsx title=components/EditIconButton.jsx
import {
  getIconButtonProps,
  getIconLabelProps,
} from '@pluralsight/tva-headless-styles'

const tvaEditIconBtnProps = getIconButtonProps('edit profile')

function EditIconButton(props) {
  return (
    <button {...props} {...tvaEditIconBtnProps}>
      {/* This icon is from the new PS Icons font - unicode WIP!!  */}
      <span {...tvaIconLabelProps}>w61</span>
    </button>
  )
}
```

## CSS API

### getButtonProps

```typescript
getButtonProps(options: ButtonOptions): ButtonProps
```

The `Button` prop-getter takes in [ButtonOptions](#buttonoptions) returns an Object that contains all the a11y attributes needed along with all the styles for you to use in any fashion you like - or easily extend/overwrite when needed.

```js title="Return value example"
{
  className: `tva-btn ${ourInternalStylesModule}`
  type: 'button'
}
```

#### ButtonProps

```typescript
interface ButtonProps {
  className: string
  type: string
}
```

:::note
If you are using **Styled-Components**, see "getJSButtonProps" section.
:::

### getIconLabelProps

```typescript
getIconLabelProps(): IconLabelButtonProps
```

Our eyes/brain recognize logos more easily than plain text, so you might want to add icons to certain buttons to enhance the UX. For example, if you have an edit button you can label it with a pencil icon.

```jsx title="Return value example"
{
  'aria-hidden': 'true'
  className: 'ps-icon'
}
```

#### IconLabelButtonProps

```typescript
interface IconLabelButtonProps {
  'aria-hidden': boolean
}
```

### getIconButtonProps

```typescript
getIconButtonProps(ariaLabel: string): IconButtonProps
```

Icon buttons are commonly found in app bars, toolbars, or as an action such as "toggle".

```jsx title=components/EditIconButton.jsx
import {
  getIconButtonProps,
  getIconLabelProps,
} from '@pluralsight/tva-headless-styles'

const tvaEditIconBtnProps = getIconButtonProps('edit profile')

function EditIconButton(props) {
  return (
    <button {...props} {...tvaEditIconBtnProps}>
      {/* This icon is from the new PS Icons font - unicode WIP!!  */}
      <span {...getIconLabelProps()}>w61</span>
    </button>
  )
}
```

#### IconButtonProps

```typescript
interface IconButtonProps {
  'aria-label': string
}
```

## CSS in JS API

### getJSButtonProps

```typescript
getJSButtonProps(options: ButtonOptions): JSButtonProps
```

If you prefer to use CSS-in-JS, use the `getJSButtonProps` function. This will return a stringified version of the styles via the `cssProps` property along with a `styles` property that uses a traditional Javascript Object for your choosing.

```js title="Return value example"
{
  cssProps: `
    color: var(--TBD)
    background-color: var(--TBD)
    ...
  `,
  styles: {
    color: button.default.text.color.value,
    backgroundColor: button.default.background.value
    ...
  },
  type: 'button',
}
```

#### JSButtonProps

```typescript
interface JSButtonProps {
  cssProps: string
  styles: Record<CSSProps, string>
  type: string
}
```

## Extending

There are times you may need to make a slight adjustment to the `Button` which is easy since we are giving you an Object. You can easily extend the Button in any way that you like.

Here is an example of using `styled-components` to extend a `Button` for a Form.

```jsx title=page/Login/components/SubmitButton.jsx
import styled from 'styled-components'
import { getJSButtonProps } from '@pluralsight/tva-headless-styles'

const tvaBtnProps = getJSButtonProps({ kind: 'contained' })

const Button = styled.button`
  ...tvaBtnProps.cssProps,
  color: '#bfbfbf' // some custom color
`

function SubmitButton(props) {
  return <Button type="submit">{props.children}</Button>
}
```

## API

| Name                 | Argument Type                                | Default                                  | Description                            |
| -------------------- | -------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| `getButtonProps`     | **options**: [ButtonOptions](#buttonoptions) | **kind**: 'default', <br />**size**: 'm' | Get main button styles.                |
| `getJSButtonProps`   | **options**: [ButtonOptions](#buttonoptions) | **kind**: 'default', <br />**size**: 'm' | Get main button styles.                |
| `getIconLabelProps`  |                                              |                                          | Get button with icon and label styles. |
| `getIconButtonProps` | **ariaLabel**: string                        |                                          | Get icon button styles.                |

## ButtonOptions

```typescript
interface ButtonOptions {
  kind: 'default' || 'contained' || 'outlined'
  size: 'xs' || 's' || 'm' || 'l'
}
```

## Button size guide

Button sizes are relative to the `padding` and `font-size` styles. Here is an interface that gives the sizing guide. Variables are referenced from the [`tokens`](../tokens/intro.md) package.

```typescript title="Example interface - does not exist in types"
interface ButtonSizeGuide {
  xs: {
    fontSize: var(--ps-font-size-body-xs)
    padding: '4px 8px'
  }
  s: {
    fontSize: var(--ps-font-size-body-s)
    padding: '6px 12px'
  }
  m: {
    fontSize: var(--ps-font-size-body-m)
    padding: '10px 16px'
  }
  l: {
    fontSize: var(--ps-font-size-body-l)
    padding: '12px 20px'
  }
}
```

## Button color guide

Button colors are relative to the `background` style. Here is an interface that gives the color guide. Variables are referenced from the [`tokens`](../tokens/intro.md) package.

```typescript title="Example interface - does not exist in types"
interface ButtonColorGuide {
  default: 'transparent'
  contained: var(--ps-color-primary-background)
  outlined: 'transparent'
}
```
