const { reverseArray } = require('../reverseArray')


// Given an array of integer, rotate the array by N elements
function rotateArray(arr, n) {
  const result = [...arr]

  for (let i = 0; i < arr.length; i++) {
    let j = i + n

    if (j < 0) j = arr.length + j
    if (j > arr.length - 1) j = j % arr.length

    result[j] = arr[i]
  }

  return result
}

// Runtime complexity O(n)
// Space complexity O(1)
function rotateArray2(arr, n) {
  // 1. Normalize the rotation so they do not exceed the length of the array
  let rotateBy = n % arr.length

  // 2. Convert negative rotations to positive rotations
  if (rotateBy < 0) {
    rotateBy = rotateBy + arr.length
  }

  // 3. Reverse the elements of the original array
  reverseArray(arr)

  // 4. Reverse the elements from 0 to N - 1
  reverseArray(arr, 0, rotateBy - 1)

  // 5. Reverse the elements from N to the end
  reverseArray(arr, rotateBy)

  return arr
}

module.exports = {
  rotateArray,
  rotateArray2
}