# Pluralsight Icons

A utility library that delivers inline SVG elements with a11y properties for all [Pluralsight Icons](https://www.figma.com/file/HVFUT0XlrkfsTMde6PMWLITj/PSDS---Icons?node-id=1177%3A43).

- [Check out the docs](https://design.pluralsight.com/docs/development/packages/icons/intro)

## Contribution

This project uses [Yarn berry workspaces](https://yarnpkg.com/features/workspaces) with Jest for unit testing. Since this is a platform agnostic framework we use a Pluralsight Codesandbox account for development. This allows us to test multiple frameworks at once without having to manage and install different packages/setups (i.e. React, MUI, styled-components, etc.) while also creating examples to use in our docs website.

## Install

This project uses Yarn 3 with PnP so there is no setup commands needed. Just clone the repo and start working. :tada:

## Testing

To run your unit tests, make sure you are in the **project root directory** not this workspace - and run:

```bash
yarn test
```
