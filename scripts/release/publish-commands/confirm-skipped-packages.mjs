#!/usr/bin/env node

'use strict'

import { info, success } from '../../theme.mjs'
import { confirm } from '../../utils.mjs'

async function confirmSkippedPackages({ skipPackages }) {
  if (skipPackages.length === 0) {
    return
  }

  console.log(
    success`{spinnerSuccess ✓} The following packages will not be published as part of this release`
  )

  skipPackages.forEach((packageName) => {
    console.log(info`• {package ${packageName}}`)
  })

  await confirm('Do you want to proceed?')
}

// Run this directly because it's fast,
// and logPromise would interfere with console prompting.
export default confirmSkippedPackages
