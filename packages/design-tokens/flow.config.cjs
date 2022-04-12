const vars = require('./utils/vars.cjs')

module.exports = {
  parsers: vars.parsers,
  source: [
    'tokens/base/*.yaml',
    'tokens/public/flow/color.yaml',
    'tokens/public/flow/colorJS.yaml',
    'tokens/public/flow/lightJS.yaml',
  ],
  platforms: {
    js: {
      ...vars.es6,
      buildPath: 'build/flow/',
    },
    common: {
      ...vars.commonjs,
      buildPath: 'build/flow/',
    },
    ts: {
      ...vars.ts,
      buildPath: 'build/flow/',
    },
    scss: {
      ...vars.scss,
      buildPath: 'build/flow/scss/',
    },
  },
}
