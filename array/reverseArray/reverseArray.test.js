const {
  reverseArray,
} = require('.')

describe("reverseArray", () => {
  test("should work", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1])

    expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 4)).toEqual([5, 4, 3, 2, 1, 6, 7, 8, 9, 10])
    expect(reverseArray([
      9, 40, 11, 32, 86,
      59, 0, 20, 10, 1
    ], 2)).toEqual([9, 40, 1, 10, 20, 0, 59, 86, 32, 11])
  })
})