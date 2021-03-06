#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import pkg from 'fs-extra'
import { error } from '../../theme.mjs'
import { warning } from '../../utils.mjs'

function tagError(message) {
  return error(errorMessage(message))
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

async function validateTags({ cwd, packages, tags }) {
  const { readJson } = pkg
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
        tagError({
          badTag: 'latest',
          version,
          release: 'Experimental',
        })
      )
      warning(
        isExperimentalVersion,
        tagError({
          badTag: 'latest',
          version,
          release: 'next',
        })
      )
    }

    warning(
      !(tags.includes('next') && isExperimentalVersion),
      tagError({
        badTag: 'experimental',
        version,
        release: 'next',
      })
    )
    warning(
      !(tags.includes('experimental') && !isExperimentalVersion),
      tagError({
        badTag: 'next',
        version,
        release: 'exprimental',
      })
    )
  } else {
    warning(
      tags.includes('latest'),
      tagError({
        badTag: 'experimental',
        version,
        release: 'latest',
      })
    )
  }
}

export default validateTags
