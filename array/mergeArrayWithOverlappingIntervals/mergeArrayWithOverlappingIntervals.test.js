const { mergeArrayWithOverlappingIntervals } = require('.')
const { Pair } = require('./Pair')

describe("mergeArrayWithOverlappingIntervals", () => {
  test("should work", () => {
    expect(mergeArrayWithOverlappingIntervals([
      new Pair(3, 7),
      new Pair(4, 6),
      new Pair(6, 8)
    ]))
      .toEqual([new Pair(3, 8)])

    expect(mergeArrayWithOverlappingIntervals([
      new Pair(10, 12),
      new Pair(12, 15)
    ])).toEqual([new Pair(10, 15)])

    expect(mergeArrayWithOverlappingIntervals([
      new Pair(1, 5),
      new Pair(3, 7),
      new Pair(4, 6),
      new Pair(6, 8),
      new Pair(10, 12),
      new Pair(11, 15)
    ]))
      .toEqual([new Pair(1, 8), new Pair(10, 15)])
  })
})