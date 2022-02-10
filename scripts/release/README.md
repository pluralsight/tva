# TVA Release Scripts

This document describes how to prepare and publish a release manually, using the command line.

However, most of our releases are actually _prereleases_ that get continuously shipped via CI. Our automated prerelease channels are preferred whenever possible, because if they accidentally break, it won't affect production users.

Before proceeding, consider your motivation:

- **"I want to share experimental features with collaborators."** After your code lands in GitHub (behind an experimental feature flag), it will be automatically published via CI. So usually, all you have to do is wait.
- **"But I want to publish it now!"** You can [trigger the CI job to run automatically](#trigger-an-automated-prerelease).
- **"I want to publish a stable release with a real version number"** Refer to the ["Publishing a Stable Release"](#publishing-a-stable-release) section. If this is your first time running a stable release, consult with another team member before proceeding.
- **"I have some special use case that's not explicitly mentioned here."** Read the rest of this document, and consult with another team member before proceeding.

## Process

If this is your first time running the release scripts, make sure you have run `yarn` in the project root to install the dependencies for the workspace.

The release process consists of several phases, each one represented by one of the scripts below.

A typical release cycle goes like this:

1. When a commit is pushed to the TVA repo, Github Actions will build all release bundles and run unit tests against both the source code and the built bundles.
2. When code is merged into `main`, an automated CI job publishes prereleases to the `next` and `experimental` channels, from tip of the main branch.
   1. You can also [trigger an automated prerelease via the command line](#trigger-an-automated-prerelease), instead of waiting until the next time the cron job runs.
   2. For advanced cases, you can [**manually prepare and publish to the `next` channel**](#publishing-release) using the [`prepare:ci-release`](#prepare:ci-release) and [`publish`](#publish) scripts; or to the [**`experimental` channel**](#publishing-an-experimental-release) using the same scripts (but different build artifacts).
3. Finally, a "next" release can be [**promoted to stable**](#publishing-a-stable-release)<sup>1</sup> using the [`prepare:npm-release`](#prepare:npm-release) and [`publish`](#publish) scripts. (This process is always manual.)

The high level process of creating releases is [documented below](#process). Individual scripts are documented as well:

- [`prepare:release`](#prepare-release-locally): Build a release locally from the checked out source code.
- [`prepare:ci-release`](#prepare:ci-release): Download a pre-built release from CI.
- [`prepare:npm-release`](#prepare:npm-release): Prepare an NPM "next" release to be published as a "stable" release.
- [`publish:release`](#publish): Publish the downloaded (or prepared) release to NPM.

<sup>1. [**Creating a patch release**](#creating-a-patch-release) has a slightly different process than a major/minor release.</sup>

## Publishing an Experimental Release

Experimental releases are special because they have additional features turned on.

The steps for publishing an experimental release are almost the same as for publishing a "next" release except for the release channel (`-R`) flag.

```sh
yarn prepare:release -r experimental --commit=0e526bc
```

Once the build has been checked out and tested locally, you're ready to publish it. When publishing an experimental release, use the `experimental` tag:

```sh
yarn publish:packages --tags experimental
```

## Publishing a Stable Release

Stable releases should always be created from the "next" channel. This encourages better testing of the actual release artifacts and reduces the chance of unintended changes accidentally being included in a stable release.

To prepare a stable release, choose a "next" version and run the [`prepare:npm-release`](#prepare:npm-release) script <sup>1</sup>:

```sh
# TODO - MAKE THIS SCRIPT
scripts/release/prepare:npm-release.js --version=0.0.0-241c4467e-20200129
```

This script will prompt you to select stable version numbers for each of the packages. It will update the package JSON versions (and dependencies) based on the numbers you select.

Once this step is complete, you're ready to publish the release:

```sh
yarn publish:packages --tags latest

# Or, if you want to bump "next" as well:
yarn publish:packages --tags latest next
```

After successfully publishing the release, follow the on-screen instructions to ensure that all of the appropriate post-release steps are executed.

<sup>1: You can omit the `version` param if you just want to promote the latest "next" candidate to stable.</sup>

## Creating a Patch Release

Patch releases should always be created by branching from a previous release. This reduces the likelihood of unstable changes being accidentally included in the release.

Begin by creating a branch from the previous git tag<sup>1</sup>:

```sh
git checkout -b 1.0.0 v1.0.0
```

Next cherry pick any changes from `main` that you want to include in the release:

```sh
git cherry-pick <commit-hash>
```

Once you have cherry picked all of the commits you want to include in the release, push your feature branch and create a Pull Request (so that the CI will create a build):

```sh
git push origin 1.0.0
```

Once CI is complete, follow the regular [**next**](#publishing-release) and [**promote to stable**](#publishing-a-stable-release) processes.

<!-- TODO: Add build-info.json script for release process -->

<sup>1: The `build-info.json` artifact can also be used to identify the appropriate commit (e.g. [unpkg.com/@pluralsight/design-tokens@1.0.0/build-info.json](https://unpkg.com/react@1.0.0/build-info.json) shows us that package version 1.0.0 was created from commit [`29b7b775f`](https://github.com/pluralsight/tva/commit/29b7b775f)).</sup>

# Scripts

## `prepare:release`

Creates a "next" build from the current (local) Git revision.

**This script is an escape hatch.** It allows a release to be created without pushing a commit to be verified by GH actions. **It does not run any automated unit tests.** Testing is solely the responsibility of the release engineer.

Note that this script git-archives the TVA repo (at the current revision) to a temporary directory before building, so **uncommitted changes are not included in the build**.

#### Example usage

To create a build from the current branch and revision:

```sh
yarn prepare:release -R experimental --commit=0e573bc
```

## `prepare:ci-release` / TODO

Downloads build artifacts from the CI in preparation to be published to NPM as either a "next" or "experimental" release.

All artifacts built by the CI have already been unit-tested (both source and bundles) but these candidates should **always be manually tested** before being published. Upon completion, this script prints manual testing instructions.

#### Example usage

To prepare the artifacts created by the CI for commit [cff3502](https://github.com/pluralsight/tva/commit/cff3502) you would run:

```sh
yarn prepare:ci-release --commit=cff3502 -R stable
```

## `prepare:npm-release` / TODO

Checks out a "next" release from NPM and prepares it to be published as a stable release.

This script prompts for new (stable) release versions for each public package and updates the package contents (both `package.json` and inline version numbers) to match. It also updates inter-package dependencies to account for the new versions.

"Next" releases have already been tested but it is still a good idea to **manually test and verify a release** before publishing to ensure that e.g. version numbers are correct. Upon completion, this script prints manual testing instructions.

#### Example usage

To promote the "next" release `0.0.0-cff3502-20200129` (aka commit [cff3502](https://github.com/pluralsight/tva/commit/cff3502)) to stable:

```sh
yarn prepare:npm-release --version=0.0.0-cff3502-20200129
```

## `publish:packages`

Publishes the current contents of `build` to NPM.

This script publishes each public package to NPM and updates the specified tag(s) to match. **It does not test or verify the local package contents before publishing**. This should be done by the release engineer prior to running the script.

Upon completion, this script provides instructions for tagging the Git commit that the package was created from and updating the release CHANGELOG.

**Specify a `--dry` flag when running this script if you want to skip the NPM-publish step.** In this event, the script will print the NPM commands but it will not actually run them.

#### Example usage

To publish a release to NPM as both `next` and `latest`:

```sh
yarn publish:packages --tags latest next
```
