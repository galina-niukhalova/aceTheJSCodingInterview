const { findPairWithGivenSumInArray } = require('.')

describe('findPairWithGivenSumInArray', () => {
  test("should work", () => {
    expect(findPairWithGivenSumInArray([], 0)).toEqual(false)
  })
})