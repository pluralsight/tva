#!/usr/bin/env node

'use strict'

import { command, importantNote } from '../../theme.mjs'

function printReleaseSummary(isStableRelease) {
  const publishScript = command`node ./scripts/release/publish.js`
  let message = ''

  if (isStableRelease) {
    message = importantNote(
      '\n⚠️  caution A stable release candidate has been prepared!\n\nYou can review the contents of this release by running:\n' +
        command`yarn build` +
        '\n\n{header Before publishing, consider testing this release locally with create-react-app!}\n\nYou can publish this release by running:\n' +
        publishScript +
        command` -R stable`
    )
  } else {
    message = importantNote(
      '\n⚠️  caution A "next" release candidate has been prepared!\n\nYou can review the contents of this release by running:\n' +
        command`yarn build` +
        '\n\nYou can publish this release by running:\n ' +
        publishScript +
        command` -R next --commit={commitSHA}`
    )
  }

  console.log(message)
}

export default printReleaseSummary
