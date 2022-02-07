#!/usr/bin/env node

'use strict'

const { join } = require('path')
const versions = require('../../versions')
const { getTheme } = require('../utils')
const parseParams = require('./publish-commands/parse-publish-params')
const validateTags = require('./publish-commands/validate-tags')
const confirmSkippedPackages = require('./publish-commands/confirm-skipped-packages')
const confirmVersionAndTags = require('./publish-commands/confirm-version-and-tags')

async function run() {
  const theme = await getTheme()
  const params = await parseParams()
  params.cwd = join(__dirname, '..', '..')
  const packages = [
    ...versions.experimentalPackages,
    ...Object.keys(versions.stablePackages),
  ]

  // Pre-filter any skipped packages to simplify the following commands.
  // As part of doing this we can also validate that none of the skipped
  // packages were misspelled.
  params.skipPackages.forEach((packageName) => {
    const index = packages.indexOf(packageName)
    if (index < 0) {
      console.log(
        theme.error(
          'Invalid skip package {package ' + packageName + ' } specified.'
        )
      )
      process.exit(1)
    } else {
      packages.splice(index, 1)
    }
  })

  await validateTags({ ...params, packages })

  if (!params.ci) {
    await confirmSkippedPackages(params)
  }

  await confirmVersionAndTags({ ...params, packages })
  // await validateSkipPackages(params)
  // await checkNPMPermissions(params)
}

run()
