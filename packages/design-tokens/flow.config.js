const baseFilter = require('./utils/baseFilter')
const jsFilter = require('./utils/jsFilter')
const yaml = require('yaml')

const baseFileConfig = {
  filter: baseFilter,
}
const jsFileConfig = {
  filter: jsFilter,
}
const transforms = ['color/hsl-4']
const jsTransforms = [...transforms, 'name/cti/camel']
const KEBAB = 'name/cti/kebab'

module.exports = {
  parsers: [
    {
      pattern: /\.yaml$/,
      parse: ({ contents }) => yaml.parse(contents),
    },
  ],
  source: [
    'tokens/base/*.yaml',
    'tokens/public/flow/color.yaml',
    'tokens/public/flow/lightColors.yaml',
  ],
  platforms: {
    js: {
      transformGroup: 'js',
      transforms: jsTransforms,
      buildPath: 'build/flow/',
      files: [
        {
          ...jsFileConfig,
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
    common: {
      transformGroup: 'commonjs',
      transforms: jsTransforms,
      buildPath: 'build/flow/common/',
      files: [
        {
          ...jsFileConfig,
          destination: 'index.js',
          format: 'javascript/module-flat',
        },
      ],
    },
    ts: {
      transformGroup: 'ts',
      transforms: jsTransforms,
      buildPath: 'build/flow/',
      files: [
        {
          ...jsFileConfig,
          destination: 'index.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      transforms: [...transforms, KEBAB],
      buildPath: 'build/flow/css/',
      files: [
        {
          ...baseFileConfig,
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      transforms: [...transforms, KEBAB],
      buildPath: 'build/flow/scss/',
      files: [
        {
          ...baseFileConfig,
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
}
