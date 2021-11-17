import { danger, fail, message, warn } from 'danger'

const documentation = danger.git.fileMatch('**/*.md')
const pr = danger.github.pr

// Issues

// Ensure that a label has been set
if (danger.github.issue.labels.length === 0) {
  warn('Please include a label to this issue.')
}

// Pull Requests

// Thank folks for making doc changes
if (documentation.edited) {
  message(
    'Thanks - We :heart: our [documentarians](http://www.writethedocs.org/)!'
  )
}

// No PR is too small to include a description of why you made a change
if (pr.body.length < 10) {
  fail('Please include the template provided for pull requests.')
}

// Always ensure we assign someone to a PR, if its a
if (pr.assignee === null) {
  const method = pr.title.includes('WIP') ? warn : fail
  method(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  )
}
