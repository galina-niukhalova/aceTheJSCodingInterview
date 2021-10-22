const {
  moveZeroesToRight,
} = require('.')

describe("findLeastCommonNumber", () => {
  test("should work", () => {
    expect(moveZeroesToRight([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]))
      .toEqual([1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0])
  })
})