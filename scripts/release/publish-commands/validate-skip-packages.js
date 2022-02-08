#!/usr/bin/env node

'use strict'

const { readJson } = require('fs-extra')
const { resolve, join } = require('path')
const { execRead, getTheme } = require('../../utils')

const readPackageJSON = async (name) => {
  const packagePath = resolve(__dirname, `../../../packages/${name}`)
  const packageJSONPath = join(packagePath, 'package.json')
  return await readJson(packageJSONPath)
}

const run = async ({ packages, skipPackages }) => {
  const theme = await getTheme()

  if (skipPackages.length === 0) {
    return
  }

  const validateDependencies = async (name, dependencies) => {
    if (!dependencies) {
      return
    }

    for (let dependency in dependencies) {
      // Do we depend on a package that has been skipped?
      if (skipPackages.includes(dependency)) {
        const version = dependencies[dependency]
        // Do we depend on a version of the package that has not been
        // published to NPM? Yarn version plugin manages this, but has no
        // ci option to date, so we have to manually manage it.
        const info = await execRead(`npm view ${dependency}@${version}`)

        if (!info) {
          console.error(
            theme.error(
              'error package: ' +
                name +
                ' depends on an unpublished skipped package'
            ),
            theme.error('error package: ' + dependency + '@' + version)
          )
          process.exit(1)
        }
      }
    }
  }

  // Make sure none of the other packages depend on a skipped package,
  // unless the dependency has already been published to NPM.
  packages.forEach(async (name) => {
    const { dependencies, peerDependencies } = await readPackageJSON(name)

    validateDependencies(name, dependencies)
    validateDependencies(name, peerDependencies)
  })
}

module.exports = run