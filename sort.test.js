const { merge, mergeWithLoop, bubbleSort, mergeSort, quickSort } = require("./sort")
const { expect, test } = require("@jest/globals")

describe('sort', () => {
  const initialArray = [43, 38, 3, 27, 10, 9, 82]
  const left = [3, 27, 38, 43]
  const right = [9, 10, 82]
  const result = [3, 9, 10, 27, 38, 43, 82]

  test('merge example', () => {
    expect(merge([...left], [...right])).toEqual(result)
  })

  test('loop merge example', () => {
    expect(
      mergeWithLoop([...left], [...right])
    ).toEqual(result)
  })

  test('bubble sort', () => {
    expect(bubbleSort([...initialArray])).toEqual(result)
  })

  test('mergeSort', () => {
    expect(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test("quick sort", () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(quickSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
      .toEqual(sortedArray)
    expect(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .toEqual(sortedArray)
    expect(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
      .toEqual(sortedArray)
  })
})