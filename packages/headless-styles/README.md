# Headless Styles

A utility library that delivers styles and a11y properties for all [Pluralsight Web UI Kit](https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1215%3A51428) Components.

- [Checkout the docs](https://pluralsight.github.io/tva/docs/development/getting-started/installation)

## Contribution

This project uses [Yarn berry workspaces](https://yarnpkg.com/features/workspaces) with Jest for unit testing. Since this is a platform agnostic framework we use a Pluralsight Codesandbox account for development. This allows us to test multiple frameworks at once without having to manage and install different packages/setups (i.e. React, MUI, styled-components, etc.) while also creating examples to use in our docs website.

## Install

This project uses Yarn 3 with PnP so there is no setup commands needed. Just clone the repo and start working. :tada:

## Testing

To run your unit tests, make sure you are in the **project root directory** not this workspace - and run:

```bash
yarn test
```
