function defaultTemplate(variables, { tpl }) {
  return tpl`
import type { SVGProps } from '../types';

${variables.interfaces};

function ${variables.componentName}(${variables.props}) {
  return (${variables.jsx})
}

${variables.exports};
`
}

module.exports = defaultTemplate
