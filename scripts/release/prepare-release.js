#!/usr/bin/env node

'use strict'

const versions = require('../../versions')
const { getTheme } = require('../utils')
const updatePackageVersions = require('./publish-commands/update-package-versions')
const parseParams = require('./publish-commands/parse-params')
const printPrereleaseSummary = require('./shared-commands/print-prerelease-summary')

async function run() {
  const params = await parseParams()
  const theme = await getTheme()
  const isStableRelease = params.releaseChannel === 'stable'

  if (isStableRelease) {
    console.log(theme.info`\n👷‍♀️  Preparing stable release...`)
    await updatePackageVersions(Object.keys(versions.stablePackages), versions)
  } else {
    console.log(theme.info('\n👷‍♀️  Preparing ' + params.release + ' release...'))
    await updatePackageVersions(versions.experimentalPackages, {
      ...versions,
      ...params,
    })
  }

  if (!params.ci) {
    await printPrereleaseSummary(isStableRelease)
  }
}

run()
