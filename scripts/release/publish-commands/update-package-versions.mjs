#!/usr/bin/env node

'use strict'

import { join } from 'node:path'
import pkg from 'fs-extra'
import { getReleaseDate, getPackagePath } from '../../utils.mjs'
import { info } from '../../theme.mjs'

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

async function updatePackageVersions(packageList, versionData) {
  const { readJsonSync, writeJSONSync } = pkg
  const date = await getReleaseDate()

  packageList.forEach((packageName) => {
    console.log(info('\n📝  Updating version for ' + packageName))

    const packagePath = getPackagePath(packageName)
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

export default updatePackageVersions
