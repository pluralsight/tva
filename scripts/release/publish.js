#!/usr/bin/env node

'use strict'

const { join } = require('path')
const versions = require('../../versions')
const { getTheme } = require('../utils')
const parseParams = require('./publish-commands/parse-publish-params')
const validateTags = require('./publish-commands/validate-tags')
const confirmSkippedPackages = require('./publish-commands/confirm-skipped-packages')
const confirmVersionAndTags = require('./publish-commands/confirm-version-and-tags')
const validateSkipPackages = require('./publish-commands/validate-skip-packages')
const checkNPMPermissions = require('./publish-commands/check-npm-permissions')
const publishToNPM = require('./publish-commands/publish-to-npm')

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

  // Validate everything

  const paramsWithPackages = { ...params, packages }
  await validateTags(paramsWithPackages)

  if (!params.ci) {
    await confirmSkippedPackages(params)
  }

  await confirmVersionAndTags(paramsWithPackages)
  await validateSkipPackages(paramsWithPackages)
  await checkNPMPermissions(packages)

  // Publish

  if (params.ci) {
    let failed = false
    packages.forEach(async (packageName) => {
      try {
        await publishToNPM(params, packageName, null)
      } catch (error) {
        failed = true
        console.error(error.message)
        console.log()
        console.log(
          theme.error`Publish failed. Will attempt to publish remaining packages.`
        )
      }
    })

    if (failed) {
      console.log(theme.error`One or more packages failed to publish.`)
      process.exit(1)
    }
  } else {
    console.clear()

    packages.forEach(async (packageName) => {
      try {
        await publishToNPM(params, packageName)
      } catch (error) {
        console.error(error.message)
        console.log()
        console.log(theme.error`Publish failed.`)
      }
    })

    // await updateStableVersionNumbers(params)
    // await printFollowUpInstructions(params)
  }
}

run()
