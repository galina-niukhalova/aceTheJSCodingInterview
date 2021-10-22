const { Pair } = require('./Pair')

// Merge an array with overlapping intervals
function mergeArrayWithOverlappingIntervals(inputArray) {
  let mergedArray = []

  for (let inputPair of inputArray) {
    const { first: currentStart, second: currentEnd } = inputPair;
    const lastMergedIndex = mergedArray.length - 1
    const { first: mergedStart, second: mergedEnd } = mergedArray[lastMergedIndex] || {}

    if (!mergedStart && !mergedEnd || currentStart > mergedEnd) {
      mergedArray.push(new Pair(currentStart, currentEnd))
    } else if (currentStart <= mergedEnd && currentEnd > mergedEnd) {
      mergedArray[lastMergedIndex].second = currentEnd
    }
  }

  return mergedArray
}

module.exports = {
  mergeArrayWithOverlappingIntervals
}