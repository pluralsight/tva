#!/usr/bin/env node

'use strict'

const { getTheme } = require('../../utils')

module.exports = async (isStableRelease) => {
  const theme = await getTheme()
  const publishScript = 'node ./scripts/release/publish.js'
  let message = ''

  if (isStableRelease) {
    message = theme.importantNote(
      '\n⚠️  caution A stable release candidate has been prepared!\n\nYou can review the contents of this release by running:\nyarn build\n\n{header Before publishing, consider testing this release locally with create-react-app!}\n\nYou can publish this release by running:\n' +
        publishScript +
        ' -R stable'
    )
  } else {
    message = theme.importantNote(
      '\n⚠️  caution A "next" release candidate has been prepared!\n\nYou can review the contents of this release by running:\nyarn build\n\nYou can publish this release by running:\n ' +
        publishScript +
        ' -R next --commit={commitSHA}'
    )
  }

  console.log(message)
}
