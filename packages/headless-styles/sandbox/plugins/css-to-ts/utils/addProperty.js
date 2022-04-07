const addProperty = (obj, key, value) => {
  const retObj = obj
  if (retObj[key]) {
    retObj[key] = { ...retObj[key], ...value }
  } else {
    retObj[key] = value
  }

  return retObj
}

export default addProperty
