function themeFilter(token) {
  if (
    token.filePath.includes('public/light.yaml') ||
    token.filePath.includes('public/flow/color.yaml') ||
    token.filePath.includes('public/flow/light.yaml')
  ) {
    return token
  }

  return undefined
}

module.exports = themeFilter
