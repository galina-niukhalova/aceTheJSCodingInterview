const {
  rotateArray,
  rotateArray2
} = require('.')

describe("rotate array", () => {
  test("should work", () => {
    expect(
      rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1)
    ).toEqual([10, 20, 0, 59, 86, 32, 11, 9, 40, 1])

    expect(
      rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2)
    ).toEqual([9, 40, 1, 10, 20, 0, 59, 86, 32, 11])

    expect(
      rotateArray([1, 2, 3, 4, 5], 2)
    ).toEqual([4, 5, 1, 2, 3])
  })

  test("rotate array (with the same array)", () => {
    expect(
      rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1)
    ).toEqual([10, 20, 0, 59, 86, 32, 11, 9, 40, 1])

    expect(
      rotateArray2([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2)
    ).toEqual([9, 40, 1, 10, 20, 0, 59, 86, 32, 11])

    expect(
      rotateArray2([1, 2, 3, 4, 5], 3)
    ).toEqual([3, 4, 5, 1, 2])
  })
})