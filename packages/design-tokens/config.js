const vars = require('./utils/vars')

module.exports = {
  parsers: vars.parsers,
  source: vars.skillsSources,
  platforms: {
    js: vars.es6,
    common: vars.commonjs,
    ts: vars.ts,
    css: vars.css,
    scss: vars.scss,
  },
}
