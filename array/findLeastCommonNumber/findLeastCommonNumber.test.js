const {
  findLeastCommonNumber,
} = require('.')

describe("findLeastCommonNumber", () => {
  test("should work", () => {
    expect(findLeastCommonNumber(
      [6, 7, 10, , 25, 30, 63, 64],
      [0, 4, 5, 6, 7, 8, 50],
      [1, 6, 10, 14]))
      .toEqual(6)
  })
})