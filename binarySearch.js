// Search for a given number in a sorted array that has been rotated by some arbitrary number

// number = 200

// [176, 188, 199, 200, 210, 222, 1, 10, 20, 47], 59, 63, 75, 88, 99, 107, 120, 133, 155, 162]
// start = 0
// end = 19

// midIndex = 9[47]
// isLeftOrdered = false
// isRightOrdered = true
// end = 9

// [176, 188, 199, 200, 210, 222, 1, 10, 20, 47]
// midIndex = 4 [210]
// isLeftOrdered = true
// isRightOrdered = false
// end = 4

// [176, 188, 199, 200, 210]
// midIndex = 2
// isLeftOrdered = true
// isRightOrdered = true
// start = 2

// [2,4]
// [199, 200, 210]
// midIndex = 3
// isLeftOrdered = true
// isRightOrdered = true
// start = 3

// [3, 4]
// [200, 210]
// midIndex = 3



// Runtime complexity: O(log n)
// Memory complexity: O(log n)
function binarySearch(arr, number, start, end) {
  if (start > end) return -1
  if (arr[end] === number) return end

  const midIndex = start + Math.floor((end - start) / 2)
  const isLeftOrdered = arr[start] < arr[midIndex]

  if ((number >= arr[midIndex] && !isLeftOrdered) || (
    (number <= arr[midIndex] && isLeftOrdered)
  )) {
    end = midIndex
  } else {
    start = midIndex
  }

  return binarySearch(arr, number, start, end)
}

function binarySearchRotated(arr, key) {
  return binarySearch(arr, key, 0, arr.length - 1)
}



module.exports = {
  binarySearchRotated
}