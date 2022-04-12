const { css, parsers } = require('./utils/vars.cjs')
const themeFilter = require('./utils/filters/themeFilter.cjs')

const baseThemeConfig = {
  ...css,
  buildPath: 'build/themes/',
  files: [
    {
      ...css.files[0],
      filter: themeFilter,
    },
  ],
}

function getThemeSelector(name) {
  return `html[data-theme="${name}"], .${name}`
}

module.exports = {
  parsers: parsers,
  source: [
    'tokens/base/*.yaml',
    'tokens/public/flow/color.yaml',
    'tokens/public/flow/light.yaml',
    'tokens/public/light.yaml',
  ],
  platforms: {
    light: {
      ...baseThemeConfig,
      files: [
        {
          ...baseThemeConfig.files[0],
          destination: 'light.css',
          options: {
            selector: getThemeSelector('light'),
          },
        },
      ],
    },
    flowDark: {
      ...baseThemeConfig,
      files: [
        {
          ...baseThemeConfig.files[0],
          destination: 'flow-dark.css',
          options: {
            selector: getThemeSelector('flow-dark'),
          },
        },
      ],
    },
    flowLight: {
      ...baseThemeConfig,
      files: [
        {
          ...baseThemeConfig.files[0],
          destination: 'flow-light.css',
          options: {
            selector: getThemeSelector('flow-light'),
          },
        },
      ],
    },
  },
}
