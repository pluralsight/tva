---
sidebar_position: 2
tags:
  [
    Development,
    Discover More,
    Versions,
    Version Strategy,
    Release frequency,
    Deprecation Policy,
  ]
---

# TVA Versions

:::caution

This section is a work in progress.

:::

Learn how we approach versioning and releases for TVA.

## Version strategy

Stability ensures that reusable components and libraries, tutorials, tools, and learned practices don't become obsolete unexpectedly. Stability is essential for the ecosystem around TVA to thrive.

This page contains the practices we follow to provide you with a leading-edge library, balanced with stability, ensuring that future changes are always introduced in a predictable way.

TVA follows [Semantic Versioning 2.0.0](https://semver.org/). TVA version numbers have three parts `major.monor.patch`. These numbers increase based on the level of change introduced in a release.

- **Major releases** contain new features, some developer assistance may be expected during the update although we strive to stay backwards compatible. When upgrading to a new major release, you may need to run update scripts, refactor code, run additional tests, and learn new APIs.
- **Minor releases** contain important new features. Minor releases are fully backwards-compatible; no developer assistance is expected during update, but you can optionally modify your apps and libraries to begin using new APIs, features, and capabilities that were added in the release.
- **Patch releases** are low risk and contain mostly bugfixes. There may be very high level (unrecognizable) new features. No developer assistance is expected during and update.

## Release frequency

A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of TVA.

In general, you can expect the following release cycle:

- A **major** release every 12 months.
- 1-3 **minor** releases for each major release.
- A **patch** release every week (anytime for urgent bugfixes).

You can follow the [milestones](https://github.com/pluralsight/tva/milestones) for a detailed review of what releases contain.

:::caution
The development, releases, and timing of any features or functionality remains at the sole discretion of TVA. The roadmap does not represent a commitment, obligation, or promise to deliver at any time.
:::

## Deprecation practices

Sometimes **"breaking changes"**, such as the removal of support for select APIs and features, are necessary.

To make these transitions as easy as possible:

- The number of breaking changes is minimized, and migration tools are provided when possible.
- The deprecation policy described below is followed, so that you have time to update your apps to the latest APIs and best practices.

### Deprecation policy

- Deprecated features are announced in the changelog, and when possible, will include warnings at runtime.
- When a deprecation is announced a recommended update path is provided.
- Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period.
- Peer dependency updates that require changes to your apps are only made in a major release.
