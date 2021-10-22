function mergeWithLoop(left, right) {
  const result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  if (left.length) {
    result.push(...left)
  }

  if (right.length) {
    result.push(...right)
  }

  return result
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    // take an element from the left
    if (left[0] < right[0]) {
      result.push(left.shift())
    }
    // take an element from the right
    else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}

function bubbleSort(array) {
  let swapped = true
  const result = [...array]

  while (swapped) {
    swapped = false

    for (let i = 0; i < result.length; i++) {
      const currentElement = result[i]
      const nextElement = result[i + 1]

      if (currentElement > nextElement) {
        result[i] = nextElement
        result[i + 1] = currentElement
        swapped = true
      }
    }
  }

  return result
}


// proptip: Split the array into halves and merge them recursively 
// proptip: return once we hit an array with a single item. That is a sorted array of size 1
// proptip: compare the arrays item by item and return the concatenated result
function mergeSort(array) {
  if (array.length >= 2) {
    const middleIndex = (array.length / 2)

    return merge(
      mergeSort(array.slice(0, middleIndex)),
      mergeSort(array.slice(middleIndex))
    )
  } else {
    return array
  }
}

function swap(array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function quickSort(array) {
  if (array.length <= 1) return array

  const pivot = array[array.length - 1];

  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j)
      j++
    }
  }

  const left = quickSort(array.slice(0, j - 1));
  const right = quickSort(array.slice(j));

  return [...left, pivot, ...right]
}

module.exports = {
  merge,
  mergeWithLoop,
  bubbleSort,
  mergeSort,
  quickSort
}