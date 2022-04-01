'use strict'

const path = require('path')

exports.name = 'addAriaLabel'
exports.type = 'visitor'
exports.active = true
exports.description = 'adds aria-label attribute to an outer <svg> element'

/**
 * Add 'aria-label' attribute to the outer <svg> element
 *
 * @see https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role#svg_and_roleimg
 *
 * @example
 * plugins: [
 *   {
 *     name: 'addAriaLabel',
 *     params: {
 *       prefix: "Prefix: ",
 *       suffix: " Suffix",
 *       useFilename: true,
 *       overwrite: false,
 *     }
 *   }
 * ]
 * arrow-right.svg:
 * <svg viewBox="0 0 100 50">...
 *             ⬇
 * <svg viewBox="0 0 100 50" aria-label="Prefix: arrow right Suffix">
 *
 * @author Tom Pietrosanti
 */
exports.fn = (root, params, source) => {
  const {
    prefix = '',
    suffix = '',
    useFilename = false,
    overwrite = false,
  } = params
  const fileLabel = path
    .basename(source.path, '.svg')
    .split(/[^a-zA-Z0-9]+/)
    .join(' ')
  const attribute = 'aria-label'
  const label = `${prefix}${useFilename ? fileLabel : ''}${suffix}`

  return {
    element: {
      enter: (node, parentNode) => {
        if (
          node.name === 'svg' &&
          parentNode.type === 'root' &&
          (overwrite || node.attributes[attribute] == null)
        ) {
          node.attributes[attribute] = label
        }
      },
    },
  }
}
