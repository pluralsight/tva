#!/usr/bin/env node

'use strict'

import { error, info } from '../../theme.mjs'
import { execRead, logPromise } from '../../utils.mjs'

async function checkNPMPermissions(packages) {
  const currentUser = await execRead('yarn npm whoami')
  const failedProjects = []

  const checkProject = async (project) => {
    const owners = (
      await execRead(`npm owner ls @pluralsight/design-${project}`)
    )
      .split('\n')
      .filter((owner) => owner)
      .map((owner) => owner.split(' ')[0])

    if (!owners.includes(currentUser)) {
      failedProjects.push(project)
    }
  }

  await logPromise(
    Promise.all(packages.map(checkProject)),
    info('Checking NPM permissions for ' + currentUser + '.')
  )

  if (failedProjects.length) {
    console.error(
      error`
      {error Insufficient NPM permissions}
      \nNPM user ${currentUser} is not an owner for: ${failedProjects
        .map((name) => error(name))
        .join(', ')}
      \nPlease contact a TVA team member to be added to the above project(s).
      `
        .replace(/\n +/g, '\n')
        .trim()
    )
    process.exit(1)
  }
}

export default checkNPMPermissions
