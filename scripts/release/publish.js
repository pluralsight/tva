#!/usr/bin/env node

'use strict'

const parseParams = require('../publish-commands/parse-params')

// 1. Establish packages version and use
// 2. update all package.json "version" in packages to make sure they match
// 3. publish to npm using correct channel

async function run() {
  try {
    const params = await parseParams()
    console.log(params)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

run()
