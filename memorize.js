// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => {
  return n * 10;
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (!cache[n]) {
    cache[n] = n * 10;
  }

  return cache[n]
}

// Task 3 - Clean up your global scope by moving your cache inside your function
// proptip: Use a closure to return a function that you can call later

const memorizeClosureTime10 = function () {
  const cache = {};

  return function (n) {
    if (!cache[n]) {
      cache[n] = 10 * n;
    }

    return cache[n];
  }
}

const memorizeTime10 = memorizeClosureTime10()
console.log("memorizeTime10(5) is ", memorizeTime10(5))


// task 4: Make your memo function generic and accept the times10 function as a callback rather than 
// defining the n*10 logic inside the if/else or pulling it in from the global scope

// proptip: 

const memorize = (cb) => {
  const cache = {}

  return function (n) {
    if (!cache[n]) {
      cache[n] = cb(n)
    }

    return cache[n]
  }
}

