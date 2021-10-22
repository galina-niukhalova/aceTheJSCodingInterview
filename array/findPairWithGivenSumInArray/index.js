function findPairWithGivenSumInArray(array, sum) {
  const hash = {}

  for (let number of array) {
    const rest = sum - number
    if (hash[rest]) {
      return true
    } else {
      hash[number] = number
    }
  }

  return false
}

module.exports = {
  findPairWithGivenSumInArray
}