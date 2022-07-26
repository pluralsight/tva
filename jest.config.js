const ROOT = '<rootDir>/packages'
const cssModuleRegex = '^.+\\.module\\.(css)$'

module.exports = {
  projects: [
    {
      displayName: 'headless-styles',
      moduleDirectories: ['.', `${ROOT}/headless-styles/src`],
      moduleNameMapper: {
        [cssModuleRegex]: 'identity-obj-proxy',
      },
      testMatch: [`${ROOT}/headless-styles/tests/**/*/?(*.)+(test).ts`],
      transformIgnorePatterns: [cssModuleRegex],
    },
    {
      displayName: 'icons',
      testMatch: [`${ROOT}/icons/tests/**/*/?(*.)+(test).(js|ts)`],
    },
    {
      displayName: 'react-utils',
      testEnvironment: 'jsdom',
      testMatch: [`${ROOT}/react-utils/tests/**/*/?(*.)+(test).tsx`],
      modulePaths: [`${ROOT}/src/`],
    },
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['\\.pnp\\.[^\\/]+$'],
  testTimeout: 50000,
  verbose: true,
}
