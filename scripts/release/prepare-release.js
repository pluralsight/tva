#!/usr/bin/env node

'use strict'

const versions = require('../../versions')
const updatePackageVersions = require('../publish-commands/update-package-versions')
const { getTheme } = require('../utils')

module.exports = async (params) => {
  const theme = await getTheme()

  if (!params) {
    console.log(theme.info`\n👷‍♀️  Preparing stable release...`)
    updatePackageVersions(Object.keys(versions.stablePackages), versions)
    process.exit(1)
  }

  console.log(theme.info('\n👷‍♀️  Preparing ' + params.release + ' release...'))
  updatePackageVersions(versions.experimentalPackages, {
    ...versions,
    ...params,
  })
}
