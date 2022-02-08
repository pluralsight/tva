#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import pkg from 'fs-extra'
import { info, success } from '../../theme.mjs'
import { confirm, getPackagePath } from '../../utils.mjs'

async function confirmVersionAndTags({ packages, tags, ci }) {
  console.clear()

  if (tags.length === 0) {
    console.error('Expected at least one tag.')
    process.exit(1)
  } else if (tags.length === 1) {
    console.log(
      success(
        '✅  You are about the publish the following packages under the tag: ' +
          tags
      )
    )
  } else {
    console.log(
      success`✅  You are about the publish the following packages under the tags ${tags.join(
        ' '
      )}:`
    )
  }

  packages.forEach(async (packageName) => {
    const { readJson } = pkg
    const packagePath = getPackagePath(packageName)
    const packageJSONPath = join(packagePath, 'package.json')
    const packageJSON = await readJson(packageJSONPath)
    console.log(
      info(
        '\n• package: ' + packageName + ' \n  version: ' + packageJSON.version
      )
    )
  })

  if (!ci) {
    await confirm('Do you want to proceed?')
  }
}

// Run this directly because it's fast,
// and logPromise would interfere with console prompting.
export default confirmVersionAndTags
