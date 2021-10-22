function findBuySellStockPrices(stockPrices) {
  let currentProfit
  let buyPrice = stockPrices[0]
  let sellPrice = stockPrices[1]
  let globalProfit = sellPrice - buyPrice

  for (let i = 1; i < stockPrices.length; i++) {
    currentProfit = stockPrices[i] - buyPrice

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit
      sellPrice = stockPrices[i]
    }

    if (buyPrice > stockPrices[i]) {
      buyPrice = stockPrices[i]
    }
  }

  return [sellPrice - globalProfit, sellPrice]
}

module.exports = {
  findBuySellStockPrices
}