#!/usr/bin/env node

'use strict'

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
  splitCommaParams,
}
