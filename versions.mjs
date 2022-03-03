#!/usr/bin/env node

'use strict'

// This module is the single source of truth for versioning packages that we
// publish to npm.
//
// 🚨 🚨 🚨
// Packages will not be published unless they are added here.
// 🚨 🚨 🚨
//
// The @latest channel uses the version as-is, e.g.:
//
//   0.0.0
//
// The @next channel appends additional information, with the scheme
// <version>-<label>-<commit_sha>, e.g.:
//
//   0.0.0-alpha-a1c2d3e4
//
// The @experimental channel doesn't include a version, with the scheme
// <label>-<commit_sha>-<date>, e.g.:
//
//   0.0.0-experimental-241c4467e-20200129

export const DesignVersion = '0.0.0'

// The label used by the @next channel. Represents the upcoming release's
// stability. Could be "alpha", "beta", "next", "rc", etc.
export const nextChannelLabel = 'alpha'

export const stablePackages = {}

// These packages do not exist in the @next or @latest channel, only
// @experimental. We don't use semver, just the commit sha, so this is just a
// list of package names instead of a map.
export const experimentalPackages = ['design-tokens']
