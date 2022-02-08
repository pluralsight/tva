#!/usr/bin/env node

'use strict'

import {
  DesignVersion,
  experimentalPackages,
  nextChannelLabel,
  stablePackages,
} from '../../versions.mjs'
import updatePackageVersions from './publish-commands/update-package-versions.mjs'
import parseParams from './publish-commands/parse-params.mjs'
import buildPackages from './shared-commands/build-packages.mjs'
import printPrereleaseSummary from './shared-commands/print-prerelease-summary.mjs'
import { info } from '../theme.mjs'

async function run() {
  const params = parseParams()
  const isStableRelease = params.releaseChannel === 'stable'
  const versions = {
    DesignVersion,
    experimentalPackages,
    nextChannelLabel,
    stablePackages,
  }

  if (isStableRelease) {
    console.log(info`\n👷‍♀️  Preparing stable release...`)
    await updatePackageVersions(Object.keys(stablePackages), versions)
  } else {
    console.log(info('\n👷‍♀️  Preparing ' + params.release + ' release...'))
    await buildPackages(experimentalPackages, params.ci)
    await updatePackageVersions(experimentalPackages, {
      ...versions,
      ...params,
    })
  }

  if (!params.ci) {
    printPrereleaseSummary(isStableRelease)
  }
}

run()
