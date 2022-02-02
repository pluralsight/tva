#!/usr/bin/env node

'use strict'

const { resolve, join } = require('path')
const { readJsonSync } = require('fs-extra')
const { getTheme } = require('../utils')

module.exports = async (packageList, versionData) => {
  const theme = await getTheme()

  packageList.forEach((packageName) => {
    console.log(theme.info('\n📝  Updating version for ' + packageName))

    const packagePath = resolve(__dirname, `../../packages/${packageName}`)
    const { version } = readJsonSync(join(packagePath, 'package.json'))

    console.log(version, versionData)

    if (versionData.commit) {
      console.log('create pre-release version')
    }

    console.log('create stable release version')
  })
}
