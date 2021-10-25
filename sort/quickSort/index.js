function quickSort(array, low, high) {
  function sort(array, low, high) {
    if (low >= high) return

    const pivot = array[high]
    let i = low;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
      }
    }

    array[high] = array[i]
    array[i] = pivot

    sort(array, low, i - 1)
    sort(array, i + 1, high)

    return array
  }

  return sort(array, 0, array.length - 1)
}

module.exports = {
  quickSort
}