const addAriaLabel = require('./utils/svgo/addAriaLabel.js')

module.exports = {
  plugins: [
    'preset-default',
    'removeXMLNS',
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
          },
        ],
      },
    },
    {
      ...addAriaLabel,
      params: {
        useFilename: true,
        suffix: ' icon',
      },
    },
  ],
}
