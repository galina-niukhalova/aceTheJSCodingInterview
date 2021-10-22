// write a func, makeChange, that returns an integer that represents the least 
// number of coins that add up to an amount where the amount is always 
// divisible by 5
// coin value: 5, 10, 15

function makeChange(amount, coins) {
  coins.sort((a, b) => b - a)

  let coinsTotal = 0;
  let rest = amount

  for (let i = 0; i < coins.length && rest > 0; i++) {
    coinsTotal += Math.floor(rest / coins[i])
    rest = rest % coins[i]
  }

  return coinsTotal
}


function makeChangeBruteForce(amount, coins) {
  let min

  function makeChange(amount, count = 0) {
    for (let i = 0; i < coins.length; i++) {
      if (amount === coins[i]) {
        if (!min || count + 1 < min) {
          min = count + 1
        }
      }

      if (amount > coins[i] && (!min || count + 1 < min)) {
        makeChange(amount - coins[i], count + 1)
      }
    }
  }

  makeChange(amount)

  return min
}

function makeChangeBruteForce2(value, coins) {
  if (value === 0) return 0

  let minCoins

  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let curMinCoins = makeChangeBruteForce2(value - coin, coins)

      if (minCoins === undefined || curMinCoins < minCoins) {
        minCoins = curMinCoins
      }
    }
  })

  return minCoins + 1
}

const makeChangeCache = {}
// With dynamic programming, memo result
function makeChangeBruteForce3(value, coins) {
  if (makeChangeCache[value]) {
    console.log(value, "from cache")
    return makeChangeCache[value]
  }

  if (value === 0) return 0

  let minCoins

  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let curMinCoins = makeChangeBruteForce2(value - coin, coins)

      if (minCoins === undefined || curMinCoins < minCoins) {
        minCoins = curMinCoins
      }
    }
  })

  makeChangeCache[value] = minCoins + 1
  return makeChangeCache[value]
}

module.exports = {
  makeChange,
  makeChangeBruteForce,
  makeChangeBruteForce2,
  makeChangeBruteForce3
}