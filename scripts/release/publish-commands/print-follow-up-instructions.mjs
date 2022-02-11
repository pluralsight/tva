#!/usr/bin/env node

'use strict'

import { command, info, link, success, warning } from '../../theme.mjs'
import { execRead } from '../../utils.mjs'

async function run({ cwd, tags, version }) {
  console.clear()

  if (tags.length === 1 && tags[0] === 'next') {
    console.log(
      success`A "next" release version ${version} has been published!`
    )
  } else if (tags.length === 1 && tags[0] === 'experimental') {
    console.log(
      success`An "experimental" release version ${version} has been published!`
    )
  } else {
    console.log(
      warning`The release has been published but you're not done yet!`
    )

    if (tags.includes('latest')) {
      console.log()
      console.log(info`Please review and commit all local, staged changes.`)

      const status = await execRead('git diff versions.mjs', { cwd })
      if (status) {
        console.log(info`• versions.mjs`)
      }

      console.log()
      console.log(info`Don't forget to also update and commit the CHANGELOG`)

      // Prompt the release engineer to tag the commit and update the CHANGELOG.
      // (The script could automatically do this, but this seems safer.)
      console.log()
      console.log(
        info`Tag the source for this release in Git with the following command:`
      )
      console.log(
        command`git tag -a v {version %s} -m "v%s" {version %s}`,
        version
      )
      console.log(command`git push origin --tags`)

      console.log()
      console.log(info`Lastly, please fill in the release on GitHub.`)
      console.log(
        link`https://github.com/pluralsight/tva/releases/tag/v%s`,
        version
      )
      console.log(
        info`\nThe GitHub release should also include links to the following artifacts:`
      )

      // Update design.pluralsight.com so the TVA version shown in the header is up to date.
      console.log()
      console.log(info`Once you've pushed changes, update the docs site.`)
      console.log(
        'This will ensure that any newly-added error codes can be decoded.'
      )

      console.log()
    }
  }
}

export default run
