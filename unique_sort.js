const uniqSort = (arr) => {
  const breadcrumbs = {}

  arr.forEach(element => {
    breadcrumbs[element] = element
  });

  return Object.values(breadcrumbs).sort((a, b) => a - b)
}

// [ 1, 4, 5, 6, 8, 9 ]
console.log(uniqSort([5, 4, 8, 1, 5, 6, 9]))