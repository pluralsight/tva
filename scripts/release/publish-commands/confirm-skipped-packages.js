#!/usr/bin/env node

'use strict'

const { confirm, getTheme } = require('../../utils')

const run = async ({ skipPackages }) => {
  const theme = await getTheme()

  if (skipPackages.length === 0) {
    return
  }

  console.clear()

  console.log(
    theme.success`{spinnerSuccess ✓} The following packages will not be published as part of this release`
  )

  skipPackages.forEach((packageName) => {
    console.log(theme.info`• {package ${packageName}}`)
  })

  await confirm('Do you want to proceed?')

  console.clear()
}

// Run this directly because it's fast,
// and logPromise would interfere with console prompting.
module.exports = run
