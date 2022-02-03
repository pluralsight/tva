#!/usr/bin/env node

'use strict'

const { resolve, join } = require('path')
const { exec } = require('child-process-promise')
const { getTheme } = require('../../utils')

module.exports = async (packageList, isCI) => {
  const theme = await getTheme()

  if (isCI) {
    // TODO: Setup GH SHA to abe able to download artifacts and reuse
    // https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts
    // await exec('gh run download <run-id> -n packages')
    process.exit(1)
  }

  console.log(theme.info`\n🛠  Building public packages...`)
  await packageList.forEach(async (packageName) => {
    const cwd = resolve(__dirname, `../../../packages/${packageName}`)
    await exec('yarn build', { cwd })
  })
}
