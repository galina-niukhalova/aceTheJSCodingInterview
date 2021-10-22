// Move all zeros to the beginning of the array
// The array has to be modified in-place
function moveZeroesToLeft(arr) {
  let count = arr.length - 1

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[count] = arr[i]
      count--
    }
  }

  while (count >= 0) {
    arr[count] = 0
    count--
  }

  return arr
}

module.exports = {
  moveZeroesToLeft
}