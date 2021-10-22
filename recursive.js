// Numbers log
function logNumbers(start, end) {
  if (start > end) return

  console.log('hitting index: ', start)
  logNumbers(start + 1, end)
}

logNumbers(3, 6)

// join elements
function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index]

    if (index === array.length - 1) {
      return resultSoFar
    } else {
      return recurse(index + 1, resultSoFar + joinString)
    }
  }

  return recurse(0, '')
}

function joinElements2(array, joinString, index = 0) {
  if (index === array.length - 1) {
    return array[index] + joinString
  }

  return array[i] + joinString + joinElements2(array, joinString, index + 1)
}

// Factorial
function factorial(n) {
  if (n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

// Use memo fn to memorize your factorial method 

function memorize(cb) {
  const cache = {}

  return function (n) {
    if (!cache[n]) {
      console.log('calc, ', n)
      cache[n] = cb(n)
    } else {
      console.log('from cache, ', n)
    }

    return cache[n]
  }
}

const memoFactorial = memorize((n) => {
  if (n === 0) return 1

  return n * memoFactorial(n - 1)
})


console.log('------- factorial(4) ------')
memoFactorial(4)

console.log('------- factorial(5) ------')
memoFactorial(5)