#!/usr/bin/env node

'use strict'

const parseParams = require('../publish-commands/parse-params')
const prepareRelease = require('./prepare-release')

// 1. Check channel to know how to create version number
// 2. update all package.json "version" in packages to make sure they match
// 3. publish to npm using correct channel

async function run() {
  try {
    const params = await parseParams()
    const { release } = params

    switch (release) {
      case 'experimental':
      case 'alpha':
      case 'beta':
      case 'next':
        prepareRelease(params)
        break

      case 'stable':
        prepareRelease()
        break

      default:
        process.exit(1)
        break
    }
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
