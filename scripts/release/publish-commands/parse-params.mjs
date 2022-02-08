#!/usr/bin/env node

'use strict'

import commandLineArgs from 'command-line-args'
import { error } from '../../theme.mjs'

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
    name: 'ci',
    type: Boolean,
    description:
      'Whether or not you are running the command in a CI environment (which skips prompts).',
    defaultValue: null,
  },
  {
    name: 'release',
    alias: 'R',
    type: String,
    description: `Release channel (${channelList})`,
  },
]

function parseParams() {
  const params = commandLineArgs(paramDefinitions)
  const channel = params.release
  const commit = params.commit

  if (!releaseChannels.includes(channel)) {
    console.error(
      error`Invalid release channel (-r) "${channel}". Must be ${channelList}`
    )
    process.exit(1)
  }

  if ((commit == null || !commit) && channel !== 'stable') {
    console.error(error`A --commit param must be specified.`)
    process.exit(1)
  }

  return params
}

export default parseParams
