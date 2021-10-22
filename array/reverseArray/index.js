function reverseArray(arr, start = 0, end) {
  if (!end) end = arr.length - 1

  for (let i = start, k = 0; i < Math.round((end - start) / 2 + start); i++, k++) {
    let temp = arr[i]
    const j = end - k

    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}

module.exports = {
  reverseArray
}
