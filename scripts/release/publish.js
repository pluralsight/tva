#!/usr/bin/env node

'use strict'

const parseParams = require('./publish-commands/parse-publish-params')

async function run() {
  const params = await parseParams()
  console.log('publish params', params)
}

run()
