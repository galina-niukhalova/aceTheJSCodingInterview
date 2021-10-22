const { expect } = require("@jest/globals")
const { binarySearch } = require("./search")

describe('binarySearch', () => {
  test('returns not found for not existing elements ', () => {
    expect(binarySearch([6, 7, 9, 50, 103, 160], 5)).toEqual('not found')
    expect(binarySearch([6, 7, 9, 50, 103, 160], 8)).toEqual('not found')
    expect(binarySearch([6, 7, 9, 50, 103, 160], 10)).toEqual('not found')
    expect(binarySearch([6, 7, 9, 50, 103, 160], 104)).toEqual('not found')
    expect(binarySearch([6, 7, 9, 50, 103, 160], 161)).toEqual('not found')
  })

  test('finds a correct index', () => {
    expect(binarySearch([6, 7, 9, 50, 103, 160], 6)).toEqual(0)
    expect(binarySearch([6, 7, 9, 50, 103, 160], 7)).toEqual(1)
    expect(binarySearch([6, 7, 9, 50, 103, 160], 9)).toEqual(2)
    expect(binarySearch([6, 7, 9, 50, 103, 160], 50)).toEqual(3)
    expect(binarySearch([6, 7, 9, 50, 103, 160], 103)).toEqual(4)
    expect(binarySearch([6, 7, 9, 50, 103, 160], 160)).toEqual(5)
  })
})