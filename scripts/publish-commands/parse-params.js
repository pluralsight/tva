#!/usr/bin/env node

'use strict'

const commandLineArgs = require('command-line-args')

const paramDefinitions = [
  {
    name: 'commit',
    alias: 'C',
    type: String,
    description:
      'GitHub commit SHA. When provided, automatically finds corresponding CI build.',
    defaultValue: null,
  },
  {
    name: 'release',
    alias: 'R',
    type: String,
    description:
      'Release channel (stable, latest, next, experimental, or alpha)',
  },
]

async function getTheme() {
  try {
    return await import('../theme.mjs')
  } catch (error) {
    console.error(console.error(`Unable to get theme. ${error}`))
    process.exit(1)
  }
}

module.exports = async () => {
  const theme = await getTheme()
  const params = commandLineArgs(paramDefinitions)
  const channel = params.release
  const commit = params.commit

  if (
    channel !== 'experimental' &&
    channel !== 'stable' &&
    channel !== 'latest'
  ) {
    console.error(
      theme.error`Invalid release channel (-r) "${channel}". Must be "stable", "experimental", or "latest".`
    )
    process.exit(1)
  }

  if (commit == null || !commit) {
    console.error(theme.error`A --commit param must be specified.`)
    process.exit(1)
  }

  // try {
  //   if (params.build === null) {
  //     params.build = await logPromise(
  //       getBuildIdForCommit(params.commit),
  //       theme`Getting build ID for commit "${params.commit}"`
  //     )
  //   }
  // } catch (error) {
  //   console.error(error(error))
  //   process.exit(1)
  // }

  return params
}
