const {
  findBuySellStockPrices,
} = require('.')

describe("findBuySellStockPrices", () => {
  test("should work", () => {
    expect(findBuySellStockPrices([8, 5, 12, 9, 19, 1])).toEqual([5, 19])
    expect(findBuySellStockPrices([21, 12, 11, 9, 6, 3])).toEqual([12, 11])

    expect(findBuySellStockPrices([12, 5, 9, 12])).toEqual([5, 12])
    expect(findBuySellStockPrices([8, 5, 12, 9, 19, 1])).toEqual([5, 19])
  })
})