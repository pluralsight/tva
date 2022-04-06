const vars = require('./utils/vars')

const baseFileConfig = vars.baseFileConfig
const transforms = vars.transforms

module.exports = {
  parsers: vars.parsers,
  source: vars.skillsSources,
  platforms: {
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
