#!/usr/bin/env node

'use strict'

import commandLineArgs from 'command-line-args'
import { splitCommaParams } from '../../utils.mjs'

const publishParamDefinitions = [
  {
    name: 'dry',
    type: Boolean,
    description: 'Dry run command without actually publishing to NPM.',
    defaultValue: false,
  },
  {
    name: 'tags',
    type: String,
    multiple: true,
    description: 'NPM tags to point to the new release.',
    defaultValue: ['untagged'],
  },
  {
    name: 'skipPackages',
    type: String,
    multiple: true,
    description: 'Packages to exclude from publishing',
    defaultValue: [],
  },
  {
    name: 'ci',
    type: Boolean,
    description: 'Run in automated environment, without interactive prompts.',
    defaultValue: false,
  },
]

export default function parsePublishParams() {
  const params = commandLineArgs(publishParamDefinitions)

  splitCommaParams(params.skipPackages)
  splitCommaParams(params.tags)

  params.tags.forEach((tag) => {
    switch (tag) {
      case 'latest':
      case 'next':
      case 'experimental':
      case 'alpha':
      case 'beta':
      case 'rc':
      case 'untagged':
        break
      default:
        console.error('Unsupported tag: "' + tag + '"')
        process.exit(1)
        break
    }
  })

  return params
}
