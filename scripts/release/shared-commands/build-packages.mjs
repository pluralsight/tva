#!/usr/bin/env node

'use strict'

import { exec } from 'child-process-promise'
import { getPackagePath } from '../../utils.mjs'
import { info } from '../../theme.mjs'

async function buildPackages(packageList, isCI) {
  if (isCI) {
    // TODO: Setup GH SHA to abe able to download artifacts and reuse
    // https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts
    // await exec('gh run download <run-id> -n packages')
    // process.exit(1)
  }

  console.log(info`\n🛠  Building public packages...`)
  await packageList.forEach(async (packageName) => {
    const cwd = getPackagePath(packageName)
    await exec('yarn build', { cwd })
  })
}

export default buildPackages
