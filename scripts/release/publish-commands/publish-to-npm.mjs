#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import { exec } from 'child-process-promise'
import pkg from 'fs-extra'
import { error, success } from '../../theme.mjs'
import { confirm, execRead, getPackagePath } from '../../utils.mjs'

async function addDistTags({ dry, tags, version }, packageName, packagePath) {
  if (dry) {
    return
  }

  tags.forEach(async (tagName) => {
    await exec(
      `yarn npm tag add @pluralsight/${packageName}@${version} ${tagName}`,
      {
        cwd: packagePath,
      }
    )
  })
}

async function addUntaggedTags({ dry, tags }, packageName) {
  if (!tags.includes('untagged') || dry) {
    return
  }
  // npm doesn't let us publish without a tag at all,
  // so for one-off publishes we clean it up ourselves.
  // await exec(`npm dist-tag rm ${packageName} untagged`)
  await exec(`yarn npm tag remove @pluralsight/${packageName} untagged`)
}

async function publishToNPM({ dry, tags, ci }, packageName) {
  const { readJsonSync } = pkg
  const packagePath = getPackagePath(packageName)
  const { version } = readJsonSync(join(packagePath, 'package.json'))
  // Check if this package version has already been published.
  // If so we might be resuming from a previous run.
  // We could infer this by comparing the build-info.json,
  // But for now the easiest way is just to ask if this is expected.
  const info = await execRead(
    `yarn npm info @pluralsight/${packageName}@${version}`
  )

  if (info) {
    console.log(
      error(
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
    console.log(success`{spinnerSuccess ✓} Publishing {package ${packageName}}`)

    // Publish the package and tag it.
    await exec(`yarn npm publish --tag=${tags[0]}`, {
      cwd: packagePath,
    })

    await addDistTags({ dry, tags, version }, packageName, packagePath)
    await addUntaggedTags({ dry, tags }, packageName)
  }
}

export default publishToNPM
