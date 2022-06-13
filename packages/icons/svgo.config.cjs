const addAriaLabel = require('./utils/addAriaLabel.cjs')
const squareViewBox = require('./utils/squareViewBox.cjs')

module.exports = {
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(stroke|fill|fill-opacity|opacity)',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            role: 'img',
            fill: 'currentColor',
          },
        ],
      },
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        className: 'ps-icon-svg',
      },
    },
    {
      ...addAriaLabel,
      params: {
        useFilename: true,
        suffix: ' icon',
      },
    },
    squareViewBox,
  ],
}
