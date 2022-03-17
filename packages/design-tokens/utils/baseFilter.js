function baseFilter(token) {
  if (
    token.filePath.includes('tokens/base') ||
    token.filePath.includes('lightColors.yaml')
  ) {
    return undefined
  }

  return token
}

module.exports = baseFilter
