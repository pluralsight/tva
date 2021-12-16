---
sidebar_position: 5
tags: [Development, Platforms, Getting Started, IE11, Server, Typescript]
---

# Supported Platforms

Learn about the platforms, from modern to old, that are supported by TVA.

## Browser

TVA supports the latest, stable releases of all major browser and platforms. You don't need to provide any Javascript polyfill as it manages unsupported browser features internally and in isolation.

| Edge  | Firefox | Chrome | Safari (macOS) | Safari (iOS) | IE                         |
| ----- | ------- | ------ | -------------- | ------------ | -------------------------- |
| >= 91 | >=78    | >=90   | >=14           | >=12.5       | 11 (partial to no support) |

An extensive list can be found in our [.browserlistrc](https://github.com/pluralsight/tva/blob/main/.browserslistrc).

## IE 11

Pluralsight officially dropped support for IE 11. However, most of what we use will be compatible but we are not focused on catering to it unless there is demand.

## Server

TVA supports [Node.js](https://github.com/nodejs/node) for server-side rendering. This aims to match the [LTS versions that are in maintenance](https://github.com/nodejs/Release#release-schedule) mode.

## Component Libraries/Frameworks

TVA supports the most recent versions of most all libraries or frameworks. If there is a tech stack you are using which TVA doesn't play well with, please let us know by [starting a discussion](https://github.com/pluralsight/tva/discussions/categories/q-a).

## Typescript

TVA requires a minimum version of Typescript 3.5. This aims to match the policy of [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), with the support of the versions of Typescript that are less than two years old.
