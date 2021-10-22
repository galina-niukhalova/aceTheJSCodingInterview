const {
  moveZeroesToLeft,
} = require('.')

describe("moveZeroesToLeft", () => {
  test("should work", () => {
    expect(moveZeroesToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]))
      .toEqual([0, 0, 0, 1, 10, 20, 59, 63, 88])

    expect(moveZeroesToLeft([1, 10, -1, 11, 5, 0, -7, 0, 25, -35]))
      .toEqual([0, 0, 1, 10, -1, 11, 5, -7, 25, -35])
  })
})