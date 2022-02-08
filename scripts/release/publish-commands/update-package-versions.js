#!/usr/bin/env node

'use strict'

const { resolve, join } = require('path')
const { readJsonSync, writeJSONSync } = require('fs-extra')
const { getReleaseDate, getTheme } = require('../../utils')

function getPrereleaseChannelLabel(version) {
  const { release } = version

  if (release === 'experimental') {
    return release
  }

  return version.nextChannelLabel
}

function getPrereleaseVersion(version, date) {
  const channelLabel = getPrereleaseChannelLabel(version)
  const isExperimental = channelLabel === 'experimental'
  const defaultVersion = `${version.DesignVersion}-${channelLabel}-${version.commit}`

  if (isExperimental) {
    return `${defaultVersion}-${date}`
  }

  return defaultVersion
}

module.exports = async (packageList, versionData) => {
  const theme = await getTheme()
  const date = await getReleaseDate()

  packageList.forEach((packageName) => {
    console.log(theme.info('\n📝  Updating version for ' + packageName))

    const packagePath = resolve(__dirname, `../../../packages/${packageName}`)
    const origPackageInfo = readJsonSync(join(packagePath, 'package.json'))
    let newVersion = `${versionData.DesignVersion}`

    if (versionData.commit) {
      newVersion = getPrereleaseVersion(versionData, date)
    }

    writeJSONSync(
      join(packagePath, 'package.json'),
      {
        ...origPackageInfo,
        version: newVersion,
      },
      {
        spaces: '\t',
      }
    )
  })
}
