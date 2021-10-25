const {
  quickSort,
} = require('.')

describe("quickSort", () => {
  test("should work", () => {
    expect(quickSort([55, 23, 26, 2, 25])).toEqual([2, 23, 25, 26, 55])
    expect(quickSort([33, 6, 21, 12, 19, 29, 38, 22, 14, 40])).toEqual([6, 12, 14, 19, 21, 22, 29, 33, 38, 40])
  })
})