#!/usr/bin/env node

'use strict'

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
  getTheme,
  splitCommaParams,
}
