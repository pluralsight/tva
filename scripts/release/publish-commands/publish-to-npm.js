#!/usr/bin/env node

'use strict'

const { resolve, join } = require('path')
const { exec } = require('child-process-promise')
const { readJsonSync } = require('fs-extra')
const { confirm, execRead, getTheme } = require('../../utils')

async function addDistTags({ dry, tags, version }, packageName, packagePath) {
  if (dry) {
    return
  }

  tags.forEach(async (tagName) => {
    await exec(`npm dist-tag add ${packageName}@${version} ${tagName}`, {
      cwd: packagePath,
    })
  })
}

async function addUntaggedTags({ dry, tags }, packageName) {
  if (!tags.includes('untagged') || dry) {
    return
  }
  // npm doesn't let us publish without a tag at all,
  // so for one-off publishes we clean it up ourselves.
  await exec(`npm dist-tag rm ${packageName} untagged`)
}

const run = async ({ dry, tags, ci }, packageName) => {
  const theme = await getTheme()
  const packagePath = resolve(__dirname, `../../../packages/${packageName}`)
  const { version } = readJsonSync(join(packagePath, 'package.json'))
  // Check if this package version has already been published.
  // If so we might be resuming from a previous run.
  // We could infer this by comparing the build-info.json,
  // But for now the easiest way is just to ask if this is expected.
  const info = await execRead(`npm view ${packageName}@${version}`)

  if (info) {
    console.log(
      theme.error(
        'error: package ' +
          packageName +
          '@' +
          version +
          ' has already been published.'
      )
    )
    if (!ci) {
      await confirm('Is this expected?')
    }
  } else {
    console.log(
      theme.success`{spinnerSuccess ✓} Publishing {package ${packageName}}`
    )

    // Publish the package and tag it.
    await exec(`npm publish --tag=${tags[0]}`, {
      cwd: packagePath,
    })

    await addDistTags({ dry, tags, version }, packageName, packagePath)
    await addUntaggedTags({ dry, tags }, packageName)
  }
}

module.exports = run
