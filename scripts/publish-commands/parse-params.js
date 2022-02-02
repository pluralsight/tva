#!/usr/bin/env node

'use strict'

const commandLineArgs = require('command-line-args')
const { getTheme } = require('../utils')

const releaseChannels = ['experimental', 'alpha', 'next', 'latest', 'stable']
const channelList = releaseChannels.join(', ')

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
    description: `Release channel (${channelList})`,
  },
]

module.exports = async () => {
  const theme = await getTheme()
  const params = commandLineArgs(paramDefinitions)
  const channel = params.release
  const commit = params.commit

  if (!releaseChannels.includes(channel)) {
    console.error(
      theme.error`Invalid release channel (-r) "${channel}". Must be ${channelList}`
    )
    process.exit(1)
  }

  if ((commit == null || !commit) && channel !== 'stable') {
    console.error(theme.error`A --commit param must be specified.`)
    process.exit(1)
  }

  return params
}
