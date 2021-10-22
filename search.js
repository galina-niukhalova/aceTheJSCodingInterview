// Linear search
console.log('----- Linear search ----- ')
function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    console.log('linearSearch: index: ', i)
    if (list[i] === item) {
      return i
    }
  }

  return -1
}

const index = linearSearch([90, 6, 7, 90, 103], 103)
console.log(index)


console.log('----- Binary search ----- ')
function binarySearch(list, item) {
  let start = 0
  let end = list.length - 1

  function search() {
    const index = start + Math.round((end - start) / 2);

    if (list[index] === item) return index

    if (start >= end) {
      return 'not found'
    }

    // look to the left
    if (list[index] > item) {
      end = index - 1
    }
    // look to the right
    else {
      start = index + 1
    }

    return search()
  }

  return search()
}

console.log('binarySearch result: ', binarySearch([6, 7, 9, 50, 103, 160], 161))

module.exports = {
  binarySearch
}