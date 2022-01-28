function baseFilter(token) {
  if (token.filePath.includes('tokens/base')) {
    return undefined
  }

  return token
}

module.exports = baseFilter
