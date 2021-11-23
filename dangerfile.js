import { danger, fail, message } from 'danger'

const documentation = danger.git.fileMatch('**/*.md')
const pr = danger.github.pr

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
