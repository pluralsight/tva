function baseFilter(token) {
  if (token.filePath.includes('color.yaml')) {
    return token
  }

  return undefined
}

module.exports = baseFilter
