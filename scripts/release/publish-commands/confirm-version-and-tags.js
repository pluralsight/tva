#!/usr/bin/env node

'use strict'

const { readJson } = require('fs-extra')
const { resolve, join } = require('path')
const { confirm, getTheme } = require('../../utils')

const run = async ({ packages, tags, ci }) => {
  const theme = await getTheme()

  console.clear()

  if (tags.length === 0) {
    console.error('Expected at least one tag.')
    process.exit(1)
  } else if (tags.length === 1) {
    console.log(
      theme.success(
        '✅  You are about the publish the following packages under the tag: ' +
          tags
      )
    )
  } else {
    console.log(
      theme.success`✅  You are about the publish the following packages under the tags ${tags.join(
        ' '
      )}:`
    )
  }

  packages.forEach(async (packageName) => {
    const packagePath = resolve(__dirname, `../../../packages/${packageName}`)
    const packageJSONPath = join(packagePath, 'package.json')
    const packageJSON = await readJson(packageJSONPath)
    console.log(
      theme.info(
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
module.exports = run
