module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [`/.pnp.cjs$`],
  testMatch: [
    `<rootDir>/packages/**/*/?(*.)+(test).(js|ts|tsx)`,
    '!<rootDir>/packages/design-tokens/**/*',
  ],
  testTimeout: 50000,
}
