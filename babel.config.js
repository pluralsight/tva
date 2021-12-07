module.exports = {
  plugins: [],
  presets: [
    ['@babel/preset-env', { modules: false, targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  ignore: ['**/*.d.ts'],
}
