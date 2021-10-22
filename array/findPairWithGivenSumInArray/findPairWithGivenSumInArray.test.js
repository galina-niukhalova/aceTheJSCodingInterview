const { findPairWithGivenSumInArray } = require('.')

describe('findPairWithGivenSumInArray', () => {
  test("should work", () => {
    expect(findPairWithGivenSumInArray([5, 7, 1, 2, 8, 4, 3], 10)).toEqual(true)
    expect(findPairWithGivenSumInArray([5, 7, 1, 2, 8, 4, 3], 19)).toEqual(false)
    expect(findPairWithGivenSumInArray([2, 1, 8, 4, 7, 3], 3)).toEqual(true)
    expect(findPairWithGivenSumInArray([2, 1, 8, 4, 7, 3], 20)).toEqual(false)
    expect(findPairWithGivenSumInArray([2, 1, 8, 4, 7, 3], 7)).toEqual(true)
  })
})