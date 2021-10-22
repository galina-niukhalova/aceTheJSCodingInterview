const { expect } = require("@jest/globals");
const { binarySearchRotated } = require("./binarySearch");

describe("Binary search", () => {
  test("binary search rotated", () => {
    expect(binarySearchRotated([7, 9, 11, 15, 1, 3, 5], 9)).toEqual(1)
    expect(binarySearchRotated(
      [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 200)
    ).toEqual(3)
  })
})