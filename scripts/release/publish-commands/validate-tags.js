#!/usr/bin/env node

'use strict'

const { readJson } = require('fs-extra')
const { join } = require('path')
const { getTheme, warning } = require('../../utils')

function isLatestTag(tags) {
  return tags.includes('latest')
}

function tagError(theme, message) {
  return theme.error(errorMessage(message))
}

function errorMessage({ release, version, badTag }) {
  return (
    'error: ' +
    release +
    ' {version: ' +
    version +
    '} cannot be tagged as ' +
    badTag
  )
}

const run = async ({ cwd, packages, tags }) => {
  const theme = await getTheme()
  // Prevent a "next" release from ever being published as @latest
  // All canaries share a version number, so it's okay to check any of them.
  const arbitraryPackageName = packages[0]
  const packageJSONPath = join(
    cwd,
    'packages',
    arbitraryPackageName,
    'package.json'
  )
  const { version } = await readJson(packageJSONPath)
  const isExperimentalVersion = version.includes('experimental')
  const isPrerelease = version.includes('-')

  if (isPrerelease) {
    if (tags.includes('latest')) {
      warning(
        !isExperimentalVersion,
        tagError(theme, {
          badTag: 'latest',
          version,
          release: 'Experimental',
        })
      )
      warning(
        isExperimentalVersion,
        tagError(theme, {
          badTag: 'next',
          version,
          release: 'latest',
        })
      )
    }

    warning(
      !(tags.includes('next') && isExperimentalVersion),
      tagError(theme, {
        badTag: 'experimental',
        version,
        release: 'next',
      })
    )
    warning(
      !(tags.includes('experimental') && !isExperimentalVersion),
      tagError(theme, {
        badTag: 'next',
        version,
        release: 'exprimental',
      })
    )
  } else {
    warning(
      tags.includes('latest'),
      tagError(theme, {
        badTag: 'stable',
        version,
        release: 'latest',
      })
    )
    warning(
      !tags.includes('experimental'),
      tagError(theme, {
        badTag: 'stable',
        version,
        release: 'experimental',
      })
    )
  }
}

module.exports = run
