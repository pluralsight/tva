const baseFilter = require('./utils/baseFilter')
const yaml = require('yaml')

const baseFileConfig = {
  filter: baseFilter,
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
  source: ['tokens/**/*.yaml'],
  platforms: {
    js: {
      transformGroup: 'js',
      transforms: jsTransforms,
      buildPath: 'build/',
      files: [
        {
          ...baseFileConfig,
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
    common: {
      transformGroup: 'commonjs',
      transforms: jsTransforms,
      buildPath: 'build/common/',
      files: [
        {
          ...baseFileConfig,
          destination: 'index.js',
          format: 'javascript/module-flat',
        },
      ],
    },
    ts: {
      transformGroup: 'ts',
      transforms: jsTransforms,
      buildPath: 'build/',
      files: [
        {
          ...baseFileConfig,
          destination: 'index.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      transforms: [...transforms, KEBAB],
      buildPath: 'build/css/',
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
      buildPath: 'build/scss/',
      files: [
        {
          ...baseFileConfig,
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    android: {
      transformGroup: 'android',
      transforms,
      buildPath: 'build/android/',
      files: [
        {
          ...baseFileConfig,
          destination: 'colors.xml',
          format: 'android/colors',
        },
      ],
    },
    ios: {
      transformGroup: 'ios',
      transforms,
      buildPath: 'build/ios/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          ...baseFileConfig,
          destination: 'StyleDictionarySize.h',
          format: 'ios/static.h',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
        {
          ...baseFileConfig,
          destination: 'StyleDictionarySize.m',
          format: 'ios/static.m',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios-swift/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionary.swift',
          format: 'ios-swift/class.swift',
          className: 'StyleDictionary',
          filter: {},
        },
      ],
    },
    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build/ios-swift/',
      files: [
        {
          ...baseFileConfig,
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionaryColor',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          ...baseFileConfig,
          destination: 'StyleDictionarySize.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
  },
}
