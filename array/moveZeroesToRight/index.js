function moveZeroesToRight(arr) {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++
    }
  }

  // Now all non-zero elements have been shifted to
  // front and 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < arr.length) {
    arr[count] = 0;
    count++
  }

  return arr
}

module.exports = {
  moveZeroesToRight
}