function findPairWithGivenSumInArray(array, sum) {
  const foundValues = new Set()

  for (let number of array) {
    const rest = sum - number
    if (foundValues.has(rest)) {
      return true
    } else {
      foundValues.add(number)
    }
  }

  return false
}

module.exports = {
  findPairWithGivenSumInArray
}