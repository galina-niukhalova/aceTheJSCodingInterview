// Maximum Subarray
// Given a large array of integer and a window size w, find the current 
// maximum value in the window as the window slides through the entire array
function findMaxSlidingWindow(arr, windowSize) {
  var result = [];
  const window = []

  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < window.length; j++) {
      if (arr[i] > window[j]) {
        window[j] = arr[i]
      }
    }

    if (i <= arr.length - windowSize) {
      window.push(arr[i])
    }

    if (window.length === windowSize || i > arr.length - windowSize) {
      result.push(window.shift())
    }
  }

  return result;
};

function findMaxSlidingWindowOptimized(arr, windowSize) {
  var result = [];
  const window = []

  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  // max of first window
  for (let i = 0; i < windowSize; i++) {
    while (window.length && arr[window[window.length - 1]] < arr[i]) {
      window.pop()
    }

    window.push(i)
  }

  result.push(arr[window[0]])

  for (let i = windowSize; i < arr.length; i++) {
    while (window.length && arr[window[window.length - 1]] <= arr[i]) {
      window.pop()
    }

    if (i - windowSize >= window[0]) {
      window.shift()
    }

    window.push(i)
    result.push(arr[window[0]])
  }

  return result
};

function findMinSlidingWindowOptimizes(arr, windowSize) {
  const window = []
  const result = []

  // find a min in a first window
  for (let i = 0; i < windowSize; i++) {
    while (window.length && arr[i] <= arr[window.length - 1]) {
      window.pop()
    }

    window.push(i)
  }

  result.push(arr[window[0]])

  for (let i = windowSize; i < arr.length; i++) {
    // 1. remove the indexes of all elements from the back of the queue, which are greater
    // than or equal to the current element
    while (window.length && arr[i] <= arr[window.length - 1]) {
      window.pop()
    }

    // 2. if the element no longer falls in the current window, remove the index of the element
    // from the front 
    while (i - windowSize >= window[0]) {
      window.shift()
    }

    // 3. Push the current element index at the back of the window
    window.push(i)

    // 4. The index of the current min element is at the front
    result.push(arr[window[0]])
  }

  return result
}


function findMaxAverage(nums, k) {
  let maxSum
  const subarraySum = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < subarraySum.length; j++) {
      subarraySum[j] += nums[i]
    }

    subarraySum.push(nums[i])

    if (subarraySum.length === k) {
      const currentSum = subarraySum.shift()

      if (maxSum === undefined || currentSum > maxSum) {
        maxSum = currentSum
      }
    }
  }

  return maxSum / k;
};


module.exports = {
  findMaxSlidingWindow,
  findMaxSlidingWindowOptimized,
  findMinSlidingWindowOptimizes,
  findMaxAverage
}