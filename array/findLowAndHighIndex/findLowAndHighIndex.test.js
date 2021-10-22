const { findLowIndex } = require('./findLowIndex')
const { findHighIndex } = require('./findHighIndex')

describe("find low and high index", () => {
  test("should work", () => {
    const array = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]

    expect(findLowIndex(array, 1)).toEqual(0)
    expect(findHighIndex(array, 1)).toEqual(2)

    expect(findLowIndex(array, 2)).toEqual(3)
    expect(findHighIndex(array, 2)).toEqual(7)

    expect(findLowIndex(array, 3)).toEqual(8)
    expect(findHighIndex(array, 3)).toEqual(10)

    expect(findLowIndex(array, 4)).toEqual(11)
    expect(findHighIndex(array, 4)).toEqual(14)

    expect(findLowIndex(array, 5)).toEqual(15)
    expect(findHighIndex(array, 5)).toEqual(17)

    expect(findLowIndex(array, 6)).toEqual(18)
  })
})