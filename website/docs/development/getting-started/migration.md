---
sidebar_position: 7
tags: [Development, Getting Started, Migration, PSDS Classic]
---

# Migration

<p className="page-subheadline" markdown="1">
  Learn how to migrate from <a href="https://github.com/pluralsight/design-system" target="_blank" rel="noopener noreferrer">PSDS Classic</a>.
</p>

Any major release or new framework has its breaking changes and PD isn't the exception. However, since this is a completely different design it should be easy to transition on your own terms - no matter the size or complexity of your project. To make this process more efficient we've listed below the recommended migrations steps, along with soutions for the most common problems you might face.

## Why should you migrate?

In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in Classic. **Even if you don't plan to use the entire PD suite** your projects will still get benefits from the upgrade.

- Small components (Button, etc.) will provide an improved experience to both your projects and customer experiences
- A renewed focus on performances and good practices (we plan on having a public dashboard soon)
- Improved user experience for various projects (scalable and framework agnostic)
- New capabilities (can work with any tech stack so you can pivot easier)

And of course a very active development cycle.

## Step by step

:::note
Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate **without introducing breaking changes**.
:::

The biggest benefit of PD is that it _only owns styles and accessbility_ and _is not a component library_ which means you will own the components and can scale or customize to whatever your situation may require.

Below we'll look at migrating the Button component which will be the same pattern you can use for all the PD "components".

### Step 1 - Installation

In order to use PD, we need to get it into your project first. For most projects, you will only need to install the components and icons packages.

```bash npm2yarn
npm install @pluralsight/headless-styles @pluralsight/icons
```

All of our packages are lightweight because they only use vanilla JS/TS, so you don't have to worry about adding additional overhead to your bundle size.

### Step 2 - Create

Since PD is headless library and not a component one, you will (and should) create a new Button component in your project. This will allow you to have full control while not worrying about styles and accessiblity.

:::tip
It is considered a React/Component library best practice to create Button components with a **specific purpose**. An example would be to create an "EditButton" or "PrimaryButton". This helps you to create components that will contain less props which will have better performance and scale easier.
:::

In this example, we are creating a `PrimaryButton` for your project.

```typescript title="components/PrimaryButton.tsx"
import { getButtonProps } from '@pluralsight/headless-styles'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function PrimaryButton(props: Props) {
  const psProps = getButtonProps({
    kind: 'default',
    size: props.size || 'm',
  })
  const classes = `${props.className} ${psProps.className}`

  return (
    <button {...props} {...psProps} className={classes}>
      {props.children}
    </button>
  )
}
```

Now, you can migrate all your Primary buttons over to use the PS created ones which will also give you more control as a team. This approach allows you to have a easier and low risk migration path without forcing a tech-debt lump that must ship everything at once.

### Step 2 - Create (CSS-in-JS example)

If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled components.

```typescript title="components/PrimaryButton.tsx"
import styled from 'styled-components'
import { getButtonProps } from '@pluralsight/headless-styles'

const PrimaryButton = styled.button`
  ${getJSButtonProps().cssProps},
`

export default PrimaryButton
```

### Step 3 - Replace

Now that you have created your new component, depending on your migration strategy, you can search all for `appearance={Button.appearances.primary}` and update the code with your new `PrimaryButton`. If you follow the examples we have, your `PrimaryButtons` will automatically accept all HTML Button properties which means that you will have a new Button API that is more flexible and easier to read/maintain for all developers.

```typescript title="Old Button"
import Button from '@pluralsight/ps-design-system-button'

...

<Button appearance={Button.appearances.primary} onClick={handleClick} type="submit">
  Do something
</Button>
```

Now becomes...

```typescript title="New Button"
import PrimaryButton from 'components/PrimaryButton'

...

<PrimaryButton onClick={handleClick} type="submit">
  Do something
</PrimaryButton>
```

## General Advices

### Migrate slowly

At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration. Taking that route not only sucks the life from your team but also risks introducing bugs through natural human error of being overwhelmed by large PR's or rubber stamping.

### You do you

Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our "components" but only **your team** knows what is best for your project. When your team are preparing for your migration use our examples as that - examples - and build your components for what makes the most sense in your project (for maintainability and scalability).

We will always have you covered for styles and accessbility, but your team will be the ones maintaining your project which means you know the best path for creation.
