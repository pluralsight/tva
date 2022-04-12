function jsFilter(token) {
  if (
    token.filePath.includes('color.yaml') ||
    token.filePath.includes('lightJS.yaml')
  ) {
    return token
  }

  return undefined
}

module.exports = jsFilter
