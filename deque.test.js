const { expect, test } = require("@jest/globals");
const { findMaxSlidingWindow, findMaxAverage, findMaxSlidingWindowOptimized, findMinSlidingWindowOptimizes } = require("./deque");

describe("Deque", () => {
  test("find max in each window", () => {
    expect(findMaxSlidingWindow([-4, 2, -5, 3, 5], 3)).toEqual([2, 3, 5])
    expect(findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([4, 4, 4, 4, 3, 5])
    expect(findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)).toEqual([3, 4, 4, 4, 3, 2, 5])
    expect(findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 5)).toEqual([4, 4, 4, 4, 5])
  })

  test("find max in each window (optimized)", () => {
    expect(findMaxSlidingWindowOptimized([-4, 2, -5, 3, 5], 3)).toEqual([2, 3, 5])
    expect(findMaxSlidingWindowOptimized([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([4, 4, 4, 4, 3, 5])
    expect(findMaxSlidingWindowOptimized([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)).toEqual([3, 4, 4, 4, 3, 2, 5])
    expect(findMaxSlidingWindowOptimized([1, 2, 3, 4, 3, 2, 1, 2, 5], 5)).toEqual([4, 4, 4, 4, 5])
  })

  test("find max in each window (optimized)", () => {
    expect(findMinSlidingWindowOptimizes([-4, 2, -5, 3, 5], 3)).toEqual([-5, -5, -5])
    expect(findMinSlidingWindowOptimizes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([1, 2, 2, 1, 1, 1])
    expect(findMinSlidingWindowOptimizes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([1, 2, 2, 1, 1, 1])
    expect(findMinSlidingWindowOptimizes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([1, 2, 2, 1, 1, 1])
  })

  test("find max average", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75)
    expect(findMaxAverage([0, 1, 1, 3, 3], 4)).toEqual(2)
  })
})