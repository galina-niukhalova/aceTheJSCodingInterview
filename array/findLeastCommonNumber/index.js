// Memory complexity O(1)
function findLeastCommonNumber(arr1, arr2, arr3) {
  let pointer1 = 0
  let pointer2 = 0
  let pointer3 = 0

  while (pointer1 < arr1.length && pointer2 < arr2.length && pointer3 < arr3.length) {
    if (arr1[pointer1] === arr2[pointer2] && arr1[pointer1] === arr3[pointer3]) {
      return arr1[pointer1]
    }

    const currentMinNumber = Math.min(arr1[pointer1], arr2[pointer2], arr3[pointer3])

    if (arr1[pointer1] === currentMinNumber) pointer1++
    if (arr2[pointer2] === currentMinNumber) pointer2++
    if (arr3[pointer3] === currentMinNumber) pointer3++
  }

  return -1
}

module.exports = {
  findLeastCommonNumber
}