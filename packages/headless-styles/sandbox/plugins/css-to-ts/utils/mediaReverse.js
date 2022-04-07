const reverseMediaQueries = (inputData) => {
  const exportObject = {}
  const moveMediaInsideClass = (object, media = false) => {
    Object.entries(object).forEach(([key, value]) => {
      if (key.includes('@media')) {
        moveMediaInsideClass(object[key], key)
      } else if (media) {
        const tempObj = {}
        tempObj[media] = value
        if (exportObject[key]) {
          exportObject[key] = { ...exportObject[key], ...tempObj }
        } else {
          exportObject[key] = tempObj
        }
      } else if (exportObject[key]) {
        exportObject[key] = { ...exportObject[key], ...value }
      } else {
        exportObject[key] = value
      }
    })
  }

  moveMediaInsideClass(inputData)
  return exportObject
}

export default reverseMediaQueries
