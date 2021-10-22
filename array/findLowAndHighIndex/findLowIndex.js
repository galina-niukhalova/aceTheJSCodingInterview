// Find Low/High Index of a Key in a sorted Array
// Given a sorted array of integers, return the low and high index of the given key
// You must return -1 if the indexes are not found

function findLowIndex(arr, key) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const middle = start + Math.round((end - start) / 2)

    if (arr[middle] === key) {
      let i = middle
      while (arr[i - 1] === key) {
        i--
      }

      return i
    }

    if (arr[middle] > key) {
      end = middle
    } else {
      start = middle
    }
  }

  return -1
}

module.exports = {
  findLowIndex
}