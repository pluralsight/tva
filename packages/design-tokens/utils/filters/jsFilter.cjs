function jsFilter(token) {
  if (
    token.filePath.includes('public/color.yaml') ||
    token.filePath.includes('colorJS.yaml') ||
    token.filePath.includes('lightJS.yaml')
  ) {
    return token
  }

  return undefined
}

module.exports = jsFilter
