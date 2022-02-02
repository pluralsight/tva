#!/usr/bin/env node

'use strict'

const { exec } = require('child-process-promise')

async function execRead(command, options) {
  const { stdout } = await exec(command, options)
  return stdout.trim()
}

async function getReleaseDate() {
  let dateString = await execRead(
    `git show -s --no-show-signature --format=%cd --date=format:%Y%m%d`
  )

  // On CI environment, this string is wrapped with quotes '...'s
  if (dateString.startsWith("'")) {
    dateString = dateString.substr(1, 8)
  }

  return dateString
}

async function getTheme() {
  try {
    return await import('./theme.mjs')
  } catch (error) {
    console.error('Unable to import theme')
    process.exit(1)
  }
}

// Convert an array param (expected format "--foo bar baz")
// to also accept comma input (e.g. "--foo bar,baz")
const splitCommaParams = (array) => {
  if (array == null) {
    return
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const param = array[i]
    if (param.includes(',')) {
      array.splice(i, 1, ...param.split(','))
    }
  }
}

module.exports = {
  execRead,
  getReleaseDate,
  getTheme,
  splitCommaParams,
}
